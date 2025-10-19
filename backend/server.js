import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import NodeCache from 'node-cache';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Cache for responses (1 hour TTL)
const responseCache = new NodeCache({ stdTTL: 3600 });

// Initialize OpenAI (only if API key is provided)
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  console.log('✅ OpenAI API initialized');
} else {
  console.log('⚠️  OpenAI API key not found. Running in knowledge-base-only mode.');
  console.log('   Add OPENAI_API_KEY to .env file to enable AI features.');
}

// Knowledge Base (fallback system)
const knowledgeBase = {
  detectQueryComplexity: (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Simple queries that KB can handle
    const simplePatterns = [
      /how much water/i,
      /when to apply/i,
      /best variety/i,
      /fertilizer.*amount/i,
      /spray.*dosage/i,
      /कि?त्ती पाणी/i,
      /कधी द्यावे/i,
    ];
    
    // Complex queries that need AI
    const complexPatterns = [
      /why.*happening/i,
      /explain.*reason/i,
      /multiple.*problems/i,
      /combination.*of/i,
      /compared to/i,
      /what if/i,
      /का.*होत.*आहे/i,
      /कारण.*काय/i,
      /एकाच.*वेळी/i,
    ];
    
    for (const pattern of complexPatterns) {
      if (pattern.test(query)) return 'complex';
    }
    
    for (const pattern of simplePatterns) {
      if (pattern.test(query)) return 'simple';
    }
    
    // Default: moderate complexity
    return 'moderate';
  },

  getKBResponse: (query, language) => {
    // This would integrate with your existing knowledge base
    // For now, return a signal that KB can't handle it
    return null;
  }
};

// Agricultural expert system prompt
const getSystemPrompt = (language) => {
  const basePrompt = `You are an expert agricultural advisor for Indian farmers, specializing in crops like Cotton, Wheat, Rice, Tomato, Vegetables, Sugarcane, and Soybean.

Your expertise includes:
- Crop-specific irrigation schedules and water management
- Fertilizer recommendations (NPK ratios, organic fertilizers, micronutrients)
- Integrated Pest Management (IPM) for insects, diseases, and weeds
- Crop varieties suitable for different regions and seasons
- Soil health management and testing
- Weather-based advisory
- Post-harvest management

Guidelines:
1. Always provide scientifically accurate advice based on ICAR (Indian Council of Agricultural Research) and FAO guidelines
2. Include specific dosages, timings, and methods when recommending inputs
3. Cite sources when possible (e.g., "Source: ICAR-CICR", "Source: FAO")
4. Provide confidence levels for your recommendations
5. Consider the farmer's context (crop, stage, season)
6. Explain the reasoning behind your advice
7. Warn about safety precautions for chemicals
8. Suggest alternatives when appropriate (organic vs chemical)
9. Be concise but comprehensive
10. Use simple, farmer-friendly language`;

  if (language === 'mr' || language === 'Marathi') {
    return basePrompt + '\n\nIMPORTANT: Respond in Marathi language (मराठी). Use Devanagari script.';
  }
  
  return basePrompt + '\n\nIMPORTANT: Respond in English.';
};

// Conversation history management
const conversations = new Map();

const getConversationHistory = (conversationId) => {
  if (!conversations.has(conversationId)) {
    conversations.set(conversationId, []);
  }
  return conversations.get(conversationId);
};

const addToConversation = (conversationId, role, content) => {
  const history = getConversationHistory(conversationId);
  history.push({ role, content, timestamp: new Date() });
  
  // Keep only last 10 messages to manage context length
  if (history.length > 10) {
    conversations.set(conversationId, history.slice(-10));
  }
};

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { query, language = 'en', conversationId = 'default' } = req.body;

    if (!query || query.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Query is required',
        message: language === 'mr' ? 'प्रश्न आवश्यक आहे' : 'Query is required'
      });
    }

    // Check cache first
    const cacheKey = `${query.toLowerCase().trim()}_${language}`;
    const cachedResponse = responseCache.get(cacheKey);
    if (cachedResponse) {
      console.log('✅ Cache hit:', query.substring(0, 50));
      return res.json({
        ...cachedResponse,
        cached: true,
        cost: 0
      });
    }

    // Determine query complexity
    const complexity = knowledgeBase.detectQueryComplexity(query);
    console.log(`📊 Query complexity: ${complexity} - "${query.substring(0, 50)}..."`);

    // Try knowledge base first for simple queries
    if (complexity === 'simple') {
      const kbResponse = knowledgeBase.getKBResponse(query, language);
      if (kbResponse) {
        console.log('✅ Knowledge Base response');
        const response = {
          response: kbResponse,
          source: 'knowledge_base',
          confidence: 0.92,
          model: 'FET-KB',
          responseTime: '< 1s',
          cached: false,
          cost: 0
        };
        responseCache.set(cacheKey, response);
        return res.json(response);
      }
    }

    // Use OpenAI for moderate/complex queries
    if (!openai) {
      return res.status(503).json({
        error: 'AI service not configured',
        message: language === 'mr' 
          ? 'AI सेवा कॉन्फिगर केलेली नाही. कृपया ज्ञान आधार वापरा.'
          : 'AI service not configured. Please use knowledge base or contact administrator.',
        fallback: true
      });
    }

    console.log('🤖 Using OpenAI GPT-4...');
    const startTime = Date.now();

    // Get conversation history
    const history = getConversationHistory(conversationId);
    const messages = [
      { role: 'system', content: getSystemPrompt(language) },
      ...history.map(h => ({ role: h.role, content: h.content })),
      { role: 'user', content: query }
    ];

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: messages,
      temperature: 0.7,
      max_tokens: 800,
      top_p: 0.9,
    });

    const responseTime = ((Date.now() - startTime) / 1000).toFixed(2);
    const aiResponse = completion.choices[0].message.content;
    const tokensUsed = completion.usage.total_tokens;
    const estimatedCost = (tokensUsed / 1000) * 0.02; // Rough estimate

    console.log(`✅ OpenAI response (${responseTime}s, ${tokensUsed} tokens, ~$${estimatedCost.toFixed(4)})`);

    // Add to conversation history
    addToConversation(conversationId, 'user', query);
    addToConversation(conversationId, 'assistant', aiResponse);

    // Prepare response
    const response = {
      response: aiResponse,
      source: 'openai_gpt4',
      confidence: 0.95,
      model: 'gpt-4-turbo-preview',
      responseTime: `${responseTime}s`,
      tokensUsed: tokensUsed,
      estimatedCost: estimatedCost,
      conversationId: conversationId,
      cached: false
    };

    // Cache the response
    responseCache.set(cacheKey, response);

    res.json(response);

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    // Handle OpenAI specific errors
    if (error.status === 401) {
      return res.status(401).json({
        error: 'Invalid API key',
        message: 'OpenAI API key is invalid. Please check your .env file.'
      });
    }
    
    if (error.status === 429) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again in a moment.'
      });
    }

    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      fallback: true
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    openaiConfigured: !!openai,
    cacheSize: responseCache.keys().length,
    activeConversations: conversations.size
  });
});

// Clear conversation endpoint
app.post('/api/conversation/clear', (req, res) => {
  const { conversationId } = req.body;
  
  if (conversationId && conversations.has(conversationId)) {
    conversations.delete(conversationId);
    console.log(`🗑️  Cleared conversation: ${conversationId}`);
  }
  
  res.json({ success: true });
});

// Get conversation history endpoint
app.get('/api/conversation/:id', (req, res) => {
  const conversationId = req.params.id;
  const history = getConversationHistory(conversationId);
  
  res.json({
    conversationId,
    messageCount: history.length,
    messages: history
  });
});

// Clear cache endpoint
app.post('/api/cache/clear', (req, res) => {
  const keysDeleted = responseCache.keys().length;
  responseCache.flushAll();
  console.log(`🗑️  Cleared ${keysDeleted} cache entries`);
  
  res.json({ 
    success: true,
    keysDeleted 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 AgriNLP Backend Server`);
  console.log(`📡 Server running on http://localhost:${PORT}`);
  console.log(`🌍 CORS enabled for all origins`);
  console.log(`💾 Cache TTL: 1 hour`);
  console.log(`🤖 AI Model: ${openai ? 'GPT-4 Turbo' : 'Knowledge Base Only'}`);
  console.log(`\n📋 Endpoints:`);
  console.log(`   POST /api/chat - Main chat endpoint`);
  console.log(`   GET  /api/health - Health check`);
  console.log(`   POST /api/conversation/clear - Clear conversation`);
  console.log(`   GET  /api/conversation/:id - Get conversation history`);
  console.log(`   POST /api/cache/clear - Clear response cache`);
  console.log(`\n✨ Ready to serve agricultural advisory queries!\n`);
});

export default app;
