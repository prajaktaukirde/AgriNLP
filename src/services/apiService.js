/**
 * API Service for AgriNLP Backend
 * Handles all communication between React frontend and Express backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

class ApiService {
  constructor() {
    this.conversationId = this.generateConversationId();
  }

  /**
   * Generate unique conversation ID
   */
  generateConversationId() {
    return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Reset conversation (start fresh)
   */
  async resetConversation() {
    try {
      const oldId = this.conversationId;
      this.conversationId = this.generateConversationId();
      
      // Clear old conversation on backend
      await fetch(`${API_BASE_URL}/api/conversation/clear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId: oldId })
      });
      
      console.log('✅ Conversation reset');
      return this.conversationId;
    } catch (error) {
      console.error('Failed to reset conversation:', error);
      this.conversationId = this.generateConversationId();
      return this.conversationId;
    }
  }

  /**
   * Send query to AI backend
   * @param {string} query - User's question
   * @param {string} language - 'en' or 'mr'
   * @returns {Promise<Object>} Response from AI
   */
  async sendQuery(query, language = 'en') {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          language,
          conversationId: this.conversationId
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'API request failed');
      }

      const data = await response.json();
      
      // Log for debugging
      console.log('📊 API Response:', {
        source: data.source,
        model: data.model,
        responseTime: data.responseTime,
        cached: data.cached,
        cost: data.estimatedCost || 0
      });

      return {
        success: true,
        data: data
      };

    } catch (error) {
      console.error('❌ API Error:', error);
      
      return {
        success: false,
        error: error.message,
        fallback: true
      };
    }
  }

  /**
   * Get conversation history
   * @returns {Promise<Array>} Conversation messages
   */
  async getConversationHistory() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/conversation/${this.conversationId}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch conversation history');
      }

      const data = await response.json();
      return data.messages || [];

    } catch (error) {
      console.error('Failed to get conversation history:', error);
      return [];
    }
  }

  /**
   * Check backend health
   * @returns {Promise<Object>} Health status
   */
  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      
      if (!response.ok) {
        throw new Error('Health check failed');
      }

      return await response.json();

    } catch (error) {
      console.error('Health check failed:', error);
      return {
        status: 'error',
        openaiConfigured: false,
        error: error.message
      };
    }
  }

  /**
   * Clear response cache on backend
   */
  async clearCache() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cache/clear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Failed to clear cache');
      }

      const data = await response.json();
      console.log(`✅ Cleared ${data.keysDeleted} cache entries`);
      return data;

    } catch (error) {
      console.error('Failed to clear cache:', error);
      return { success: false, error: error.message };
    }
  }
}

// Create singleton instance
const apiService = new ApiService();

export default apiService;

// Export individual functions for convenience
export const sendQuery = (query, language) => apiService.sendQuery(query, language);
export const resetConversation = () => apiService.resetConversation();
export const getConversationHistory = () => apiService.getConversationHistory();
export const checkHealth = () => apiService.checkHealth();
export const clearCache = () => apiService.clearCache();
