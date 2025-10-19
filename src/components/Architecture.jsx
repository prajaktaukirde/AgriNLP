import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Architecture.css';

const Architecture = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stepIcons = [
    // Query Input
    <svg viewBox="0 0 100 100" className="step-icon">
      <circle cx="50" cy="50" r="45" fill="#4CAF50" opacity="0.1"/>
      <path d="M30 40 Q50 20 70 40 T70 60" stroke="#4CAF50" strokeWidth="3" fill="none"/>
      <circle cx="50" cy="50" r="8" fill="#4CAF50"/>
      <text x="50" y="80" textAnchor="middle" fontSize="12" fill="#4CAF50">Query</text>
    </svg>,
    // Fuzzy Logic
    <svg viewBox="0 0 100 100" className="step-icon">
      <circle cx="50" cy="50" r="45" fill="#FF9800" opacity="0.1"/>
      <path d="M25 50 L40 30 L55 45 L70 25 L85 40" stroke="#FF9800" strokeWidth="3" fill="none"/>
      <path d="M25 70 L40 55 L55 65 L70 50 L85 60" stroke="#FF9800" strokeWidth="3" fill="none" opacity="0.6"/>
      <text x="50" y="90" textAnchor="middle" fontSize="11" fill="#FF9800">Fuzzy</text>
    </svg>,
    // Evolutionary GA
    <svg viewBox="0 0 100 100" className="step-icon">
      <circle cx="50" cy="50" r="45" fill="#2196F3" opacity="0.1"/>
      <path d="M50 20 L35 45 L50 40 L65 45 Z" fill="#2196F3" opacity="0.7"/>
      <path d="M50 45 L35 70 L50 65 L65 70 Z" fill="#2196F3" opacity="0.5"/>
      <circle cx="50" cy="35" r="3" fill="#2196F3"/>
      <circle cx="50" cy="60" r="3" fill="#2196F3"/>
      <text x="50" y="90" textAnchor="middle" fontSize="12" fill="#2196F3">GA</text>
    </svg>,
    // RAG Knowledge
    <svg viewBox="0 0 100 100" className="step-icon">
      <circle cx="50" cy="50" r="45" fill="#9C27B0" opacity="0.1"/>
      <rect x="35" y="30" width="30" height="40" rx="3" fill="#9C27B0" opacity="0.3"/>
      <line x1="40" y1="40" x2="60" y2="40" stroke="#9C27B0" strokeWidth="2"/>
      <line x1="40" y1="50" x2="60" y2="50" stroke="#9C27B0" strokeWidth="2"/>
      <line x1="40" y1="60" x2="55" y2="60" stroke="#9C27B0" strokeWidth="2"/>
      <text x="50" y="85" textAnchor="middle" fontSize="12" fill="#9C27B0">RAG</text>
    </svg>,
    // Output
    <svg viewBox="0 0 100 100" className="step-icon">
      <circle cx="50" cy="50" r="45" fill="#F44336" opacity="0.1"/>
      <path d="M30 45 L45 60 L70 35" stroke="#F44336" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="50" r="35" stroke="#F44336" strokeWidth="3" fill="none" opacity="0.3"/>
      <text x="50" y="90" textAnchor="middle" fontSize="11" fill="#F44336">Result</text>
    </svg>
  ];

  return (
    <section id="architecture" className="architecture">
      <div className="container">
        <h2 className="section-title">{t.architecture.title}</h2>
        
        {/* Animated Flow Diagram */}
        <div className="flow-diagram">
          <div className="flow-line"></div>
          <div className="workflow">
            {t.architecture.steps.map((step, index) => (
              <div key={index} className="workflow-step" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="step-icon-container">
                  {stepIcons[index]}
                </div>
                <div className="step-content">
                  <div className="step-number">{index + 1}</div>
                  <p className="step-text">{step}</p>
                </div>
                {index < t.architecture.steps.length - 1 && (
                  <div className="step-arrow">
                    <svg viewBox="0 0 40 40" className="arrow-svg">
                      <path d="M5 20 L30 20 M25 15 L30 20 L25 25" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Example Box with Animation */}
        <div className="example-box">
          <div className="example-icon">
            <svg viewBox="0 0 60 60" className="example-svg">
              <circle cx="30" cy="30" r="28" fill="#FFF" opacity="0.2"/>
              <path d="M30 10 L35 20 L30 30 L25 20 Z" fill="#FFC107"/>
              <path d="M20 25 L30 30 L20 40 L15 35 Z" fill="#FFC107" opacity="0.8"/>
              <path d="M40 25 L45 35 L40 40 L30 30 Z" fill="#FFC107" opacity="0.8"/>
              <ellipse cx="30" cy="45" rx="20" ry="3" fill="#FFF" opacity="0.3"/>
            </svg>
          </div>
          <p className="example-text">{t.architecture.example}</p>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
