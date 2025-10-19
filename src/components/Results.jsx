import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { useEffect, useState } from 'react';
import './Results.css';

const Results = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('.results');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const results = [
    { value: '+13%', label: t.results.accuracy, color: '#4CAF50', icon: '🎯' },
    { value: '+22%', label: t.results.clarity, color: '#2196F3', icon: '💡' },
    { value: t.results.multimodal, label: t.results.multimodalDetails, color: '#9C27B0', icon: '🎙️' }
  ];

  return (
    <section id="results" className="results">
      <div className="container">
        <h2 className="section-title">{t.results.title}</h2>
        
        {/* Animated Trophy Icon */}
        <div className="results-header">
          <svg viewBox="0 0 100 100" className="trophy-icon">
            <path d="M30 25 L30 15 Q30 10 35 10 L65 10 Q70 10 70 15 L70 25" stroke="#FFD700" strokeWidth="2" fill="none"/>
            <ellipse cx="50" cy="25" rx="20" ry="8" fill="#FFD700" opacity="0.3"/>
            <path d="M30 25 Q30 45 50 50 Q70 45 70 25" fill="#FFD700" opacity="0.5"/>
            <rect x="45" y="50" width="10" height="15" fill="#FFD700" opacity="0.7"/>
            <ellipse cx="50" cy="65" rx="15" ry="5" fill="#FFD700" opacity="0.4"/>
            <circle cx="50" cy="32" r="8" fill="#FFF" opacity="0.5"/>
            <text x="50" y="37" textAnchor="middle" fontSize="10" fill="#FFD700" fontWeight="bold">1st</text>
          </svg>
        </div>

        <div className="results-grid">
          {results.map((result, index) => (
            <div 
              key={index} 
              className={`result-card ${isVisible ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 0.2}s`,
                background: `linear-gradient(135deg, ${result.color} 0%, ${result.color}dd 100%)`
              }}
            >
              <div className="result-icon">{result.icon}</div>
              <div className="result-value" data-value={result.value}>
                {isVisible ? result.value : '0'}
              </div>
              <div className="result-label">{result.label}</div>
              
              {/* Animated particles */}
              <div className="particle" style={{ '--delay': '0s', '--x': '20px', '--y': '-30px' }}></div>
              <div className="particle" style={{ '--delay': '0.5s', '--x': '-25px', '--y': '-25px' }}></div>
              <div className="particle" style={{ '--delay': '1s', '--x': '30px', '--y': '-20px' }}></div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="achievement-badges">
          <div className="badge">
            <div className="badge-icon">🏆</div>
            <div className="badge-text">{language === 'en' ? 'Best Accuracy' : 'सर्वोत्तम अचूकता'}</div>
          </div>
          <div className="badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-text">{language === 'en' ? 'Top Performance' : 'उच्च कार्यप्रदर्शन'}</div>
          </div>
          <div className="badge">
            <div className="badge-icon">🎨</div>
            <div className="badge-text">{language === 'en' ? 'Multimodal Support' : 'मल्टिमोडल समर्थन'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
