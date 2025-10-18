import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { useAnalytics } from '../AnalyticsContext';
import { translations } from '../translations';
import './Analytics.css';

const Analytics = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { getAnalytics, clearAnalytics } = useAnalytics();
  const t = translations[language];

  // Get real analytics data
  const analytics = getAnalytics();
  
  // Calculate change from last month
  const lastMonthQueries = analytics.lastMonthQueries || 0;
  const currentQueries = analytics.queryTrends[analytics.queryTrends.length - 1]?.queries || 0;
  const queryGrowth = lastMonthQueries > 0 
    ? (((currentQueries - lastMonthQueries) / lastMonthQueries) * 100).toFixed(1)
    : '0.0';

  // Use real data or show empty state
  const hasData = analytics.totalQueries > 0;
  
  const maxQueryTrend = hasData ? Math.max(...analytics.queryTrends.map(d => d.queries), 1) : 1;
  const maxConfidence = hasData ? Math.max(...analytics.confidenceDistribution.map(d => d.count), 1) : 1;
  const maxCrop = hasData && analytics.topCrops.length > 0 ? Math.max(...analytics.topCrops.map(d => d.count), 1) : 1;
  const maxRegional = hasData && analytics.regionalUsage.length > 0 ? Math.max(...analytics.regionalUsage.map(d => d.count), 1) : 1;

  return (
    <div className="analytics">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>FET</div>
          <button onClick={() => navigate('/get-started')} className="btn btn-outline">
            {t.nav.backToHome}
          </button>
        </div>
      </nav>

      <div className="analytics-container">
        <div className="analytics-header">
          <h1>{t.analytics.title}</h1>
          <p className="analytics-subtitle">{t.analytics.subtitle}</p>
          {hasData && (
            <button onClick={clearAnalytics} className="btn btn-outline" style={{ marginTop: '1rem' }}>
              {language === 'en' ? 'Clear Analytics Data' : 'विश्लेषण डेटा साफ करा'}
            </button>
          )}
        </div>

        {!hasData ? (
          <div className="no-data-state">
            <div className="no-data-icon">📊</div>
            <h2>{language === 'en' ? 'No Analytics Data Yet' : 'अजून विश्लेषण डेटा नाही'}</h2>
            <p>
              {language === 'en' 
                ? 'Start using the Advisory module to see real-time analytics. Each query will be tracked and analyzed using FET framework components (Multilingual Transformer, Fuzzy Inference, Evolutionary Optimization, and RAG).'
                : 'रीअल-टाइम विश्लेषण पाहण्यासाठी सल्ला मॉड्यूल वापरण्यास प्रारंभ करा. प्रत्येक प्रश्न FET फ्रेमवर्क घटकांचा वापर करून ट्रॅक आणि विश्लेषण केले जाईल.'}
            </p>
            <button onClick={() => navigate('/advisory')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              {language === 'en' ? 'Go to Advisory' : 'सल्ल्याकडे जा'}
            </button>
          </div>
        ) : (
          <>
            {/* Overview Cards */}
            <div className="overview-section">
              <h2 className="section-heading">{t.analytics.overview}</h2>
              <div className="overview-grid">
                <div className="stat-card">
                  <div className="stat-label">{t.analytics.totalQueries}</div>
                  <div className="stat-value">{analytics.totalQueries}</div>
                  <div className={`stat-change ${parseFloat(queryGrowth) >= 0 ? 'positive' : 'negative'}`}>
                    {queryGrowth >= 0 ? '+' : ''}{queryGrowth}% {t.analytics.fromLastMonth}
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">{t.analytics.avgConfidence}</div>
                  <div className="stat-value">{analytics.avgConfidence}%</div>
                  <div className="stat-change positive">FET Framework</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">{t.analytics.avgResponseTime}</div>
                  <div className="stat-value">{analytics.avgResponseTime}s</div>
                  <div className="stat-change positive">Fuzzy + RAG</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">{t.analytics.successRate}</div>
                  <div className="stat-value">{analytics.successRate}%</div>
                  <div className="stat-change positive">GA Optimized</div>
                </div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="charts-grid">
              {/* Query Trends */}
              <div className="chart-card">
                <h3 className="chart-title">{t.analytics.queryTrends}</h3>
                <p className="chart-desc">{t.analytics.queryTrendsDesc}</p>
                <div className="chart-container">
                  <div className="bar-chart">
                    {analytics.queryTrends.map((item, index) => (
                      <div key={index} className="bar-group">
                        <div className="bar-wrapper">
                          <div 
                            className="bar bar-primary"
                            style={{ height: `${(item.queries / maxQueryTrend) * 100}%` }}
                          >
                            <span className="bar-value">{item.queries}</span>
                          </div>
                        </div>
                        <div className="bar-label">{item.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Confidence Metrics */}
              <div className="chart-card">
                <h3 className="chart-title">{t.analytics.confidenceMetrics}</h3>
                <p className="chart-desc">{t.analytics.confidenceMetricsDesc}</p>
                <div className="chart-container">
                  <div className="bar-chart horizontal">
                    {analytics.confidenceDistribution.map((item, index) => (
                      <div key={index} className="bar-group horizontal">
                        <div className="bar-label-left">{item.range}</div>
                        <div className="bar-wrapper-horizontal">
                          <div 
                            className="bar bar-secondary"
                            style={{ width: `${(item.count / maxConfidence) * 100}%` }}
                          >
                            <span className="bar-value">{item.count}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Crops */}
              {analytics.topCrops.length > 0 && (
                <div className="chart-card">
                  <h3 className="chart-title">{t.analytics.topCrops}</h3>
                  <p className="chart-desc">{t.analytics.topCropsDesc}</p>
                  <div className="chart-container">
                    <div className="bar-chart horizontal">
                      {analytics.topCrops.map((item, index) => (
                        <div key={index} className="bar-group horizontal">
                          <div className="bar-label-left">{item.crop}</div>
                          <div className="bar-wrapper-horizontal">
                            <div 
                              className="bar bar-accent"
                              style={{ width: `${(item.count / maxCrop) * 100}%` }}
                            >
                              <span className="bar-value">{item.count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Query Distribution */}
              {analytics.queryTypeDistribution.length > 0 && (
                <div className="chart-card">
                  <h3 className="chart-title">{t.analytics.queryDistribution}</h3>
                  <p className="chart-desc">{t.analytics.queryDistributionDesc}</p>
                  <div className="chart-container">
                    <div className="pie-chart-container">
                      <div className="pie-legend">
                        {analytics.queryTypeDistribution.map((item, index) => {
                          const colors = ['#2e7d32', '#66bb6a', '#ffa726', '#42a5f5', '#ab47bc', '#26c6da'];
                          return (
                            <div key={index} className="legend-item">
                              <span className="legend-color" style={{ background: colors[index % colors.length] }}></span>
                              <span className="legend-text">{item.type}: {item.percentage}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Regional Usage */}
              {analytics.regionalUsage.length > 0 && (
                <div className="chart-card">
                  <h3 className="chart-title">{t.analytics.regionalUsage}</h3>
                  <p className="chart-desc">{t.analytics.regionalUsageDesc}</p>
                  <div className="chart-container">
                    <div className="bar-chart horizontal">
                      {analytics.regionalUsage.map((item, index) => (
                        <div key={index} className="bar-group horizontal">
                          <div className="bar-label-left">{item.region}</div>
                          <div className="bar-wrapper-horizontal">
                            <div 
                              className="bar bar-info"
                              style={{ width: `${(item.count / maxRegional) * 100}%` }}
                            >
                              <span className="bar-value">{item.count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Language Distribution */}
              {analytics.languageDistribution.length > 0 && (
                <div className="chart-card">
                  <h3 className="chart-title">{t.analytics.languageDistribution}</h3>
                  <p className="chart-desc">{t.analytics.languageDistributionDesc}</p>
                  <div className="chart-container">
                    <div className="donut-chart-container">
                      <div className="pie-legend">
                        {analytics.languageDistribution.map((item, index) => {
                          const colors = ['#2e7d32', '#66bb6a', '#ffa726'];
                          return (
                            <div key={index} className="legend-item">
                              <span className="legend-color" style={{ background: colors[index % colors.length] }}></span>
                              <span className="legend-text">{item.language}: {item.percentage}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;
