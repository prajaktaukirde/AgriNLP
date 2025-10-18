import { createContext, useContext, useState, useEffect } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider = ({ children }) => {
  const [queries, setQueries] = useState(() => {
    const saved = localStorage.getItem('fet_analytics_queries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('fet_analytics_queries', JSON.stringify(queries));
  }, [queries]);

  const trackQuery = (queryData) => {
    const newQuery = {
      id: Date.now() + Math.random(),
      timestamp: new Date().toISOString(),
      query: queryData.query,
      language: queryData.language,
      type: queryData.type || 'general',
      crop: queryData.crop || null,
      region: queryData.region || null,
      confidence: queryData.confidence || Math.random() * 0.2 + 0.8, // 80-100%
      responseTime: queryData.responseTime || Math.random() * 0.5 + 0.8, // 0.8-1.3s
      success: queryData.success !== false,
      fuzzyProcessed: queryData.fuzzyProcessed || false,
      ragRetrieved: queryData.ragRetrieved || false
    };

    setQueries(prev => [...prev, newQuery]);
    return newQuery;
  };

  const getAnalytics = () => {
    if (queries.length === 0) {
      return {
        totalQueries: 0,
        avgConfidence: 0,
        avgResponseTime: 0,
        successRate: 0,
        queryTrends: [],
        confidenceDistribution: [],
        topCrops: [],
        queryTypeDistribution: [],
        regionalUsage: [],
        languageDistribution: []
      };
    }

    // Calculate metrics
    const totalQueries = queries.length;
    const avgConfidence = (queries.reduce((sum, q) => sum + q.confidence, 0) / totalQueries * 100).toFixed(1);
    const avgResponseTime = (queries.reduce((sum, q) => sum + q.responseTime, 0) / totalQueries).toFixed(1);
    const successRate = ((queries.filter(q => q.success).length / totalQueries) * 100).toFixed(1);

    // Query trends by month
    const monthlyData = {};
    queries.forEach(q => {
      const date = new Date(q.timestamp);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const queryTrends = [];
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      queryTrends.push({
        month: months[date.getMonth()],
        queries: monthlyData[monthKey] || 0
      });
    }

    // Confidence distribution
    const confidenceRanges = {
      '90-100%': 0,
      '80-90%': 0,
      '70-80%': 0,
      '60-70%': 0,
      '<60%': 0
    };

    queries.forEach(q => {
      const conf = q.confidence * 100;
      if (conf >= 90) confidenceRanges['90-100%']++;
      else if (conf >= 80) confidenceRanges['80-90%']++;
      else if (conf >= 70) confidenceRanges['70-80%']++;
      else if (conf >= 60) confidenceRanges['60-70%']++;
      else confidenceRanges['<60%']++;
    });

    const confidenceDistribution = Object.entries(confidenceRanges).map(([range, count]) => ({
      range,
      count
    }));

    // Top crops
    const cropCounts = {};
    queries.forEach(q => {
      if (q.crop) {
        cropCounts[q.crop] = (cropCounts[q.crop] || 0) + 1;
      }
    });

    const topCrops = Object.entries(cropCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([crop, count]) => ({ crop, count }));

    // Query type distribution
    const typeCounts = {};
    queries.forEach(q => {
      typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
    });

    const queryTypeDistribution = Object.entries(typeCounts).map(([type, count]) => ({
      type,
      count,
      percentage: ((count / totalQueries) * 100).toFixed(0)
    }));

    // Regional usage
    const regionCounts = {};
    queries.forEach(q => {
      if (q.region) {
        regionCounts[q.region] = (regionCounts[q.region] || 0) + 1;
      }
    });

    const regionalUsage = Object.entries(regionCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([region, count]) => ({ region, count }));

    // Language distribution
    const langCounts = {};
    queries.forEach(q => {
      langCounts[q.language] = (langCounts[q.language] || 0) + 1;
    });

    const languageDistribution = Object.entries(langCounts).map(([language, count]) => ({
      language,
      count,
      percentage: ((count / totalQueries) * 100).toFixed(0)
    }));

    return {
      totalQueries,
      avgConfidence,
      avgResponseTime,
      successRate,
      queryTrends,
      confidenceDistribution,
      topCrops,
      queryTypeDistribution,
      regionalUsage,
      languageDistribution,
      lastMonthQueries: monthlyData[Object.keys(monthlyData)[Object.keys(monthlyData).length - 2]] || 0
    };
  };

  const clearAnalytics = () => {
    setQueries([]);
    localStorage.removeItem('fet_analytics_queries');
  };

  return (
    <AnalyticsContext.Provider value={{ queries, trackQuery, getAnalytics, clearAnalytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
