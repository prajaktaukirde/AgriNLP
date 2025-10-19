import { createContext, useContext, useState, useCallback } from 'react';
import apiService from './services/apiService';

const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [isAIEnabled, setIsAIEnabled] = useState(false);
  const [backendHealth, setBackendHealth] = useState(null);
  const [isCheckingHealth, setIsCheckingHealth] = useState(false);

  /**
   * Check if backend is available and AI is configured
   */
  const checkBackendHealth = useCallback(async () => {
    setIsCheckingHealth(true);
    try {
      const health = await apiService.checkHealth();
      setBackendHealth(health);
      setIsAIEnabled(health.status === 'healthy' && health.openaiConfigured);
      return health;
    } catch (error) {
      console.error('Health check failed:', error);
      setBackendHealth({ status: 'error', error: error.message });
      setIsAIEnabled(false);
      return null;
    } finally {
      setIsCheckingHealth(false);
    }
  }, []);

  /**
   * Send query with automatic fallback
   */
  const sendMessage = useCallback(async (query, language) => {
    try {
      const result = await apiService.sendQuery(query, language);
      
      if (result.success) {
        return {
          success: true,
          response: result.data.response,
          source: result.data.source,
          model: result.data.model,
          confidence: result.data.confidence,
          responseTime: result.data.responseTime,
          cost: result.data.estimatedCost || 0,
          cached: result.data.cached || false
        };
      } else {
        // Return error but allow fallback
        return {
          success: false,
          error: result.error,
          fallback: true
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        fallback: true
      };
    }
  }, []);

  /**
   * Reset conversation
   */
  const resetConversation = useCallback(async () => {
    await apiService.resetConversation();
  }, []);

  /**
   * Get conversation history
   */
  const getHistory = useCallback(async () => {
    return await apiService.getConversationHistory();
  }, []);

  const value = {
    isAIEnabled,
    backendHealth,
    isCheckingHealth,
    checkBackendHealth,
    sendMessage,
    resetConversation,
    getHistory
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error('useConversation must be used within ConversationProvider');
  }
  return context;
};

export default ConversationContext;
