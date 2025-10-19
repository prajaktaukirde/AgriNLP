import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/get-started')}>
              {t.nav.getStarted}
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('architecture').scrollIntoView({ behavior: 'smooth' })}>
              {t.nav.viewArchitecture}
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">91.3%</div>
              <div className="stat-label">{t.hero.accuracy}</div>
            </div>
            <div className="stat">
              <div className="stat-value">+22%</div>
              <div className="stat-label">{t.hero.clarity}</div>
            </div>
            <div className="stat">
              <div className="stat-value">0.87 / 0.85</div>
              <div className="stat-label">{t.hero.bleuRouge}</div>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-image-grid">
            <div className="hero-image-card">
              <svg viewBox="0 0 100 100" className="hero-svg">
                <circle cx="50" cy="50" r="45" fill="#4CAF50" opacity="0.1"/>
                <path d="M50 20 L55 35 L50 50 L45 35 Z" fill="#FFC107"/>
                <path d="M40 50 L45 65 L40 80 L35 65 Z" fill="#FFC107"/>
                <path d="M60 50 L65 65 L60 80 L55 65 Z" fill="#FFC107"/>
                <rect x="48" y="50" width="4" height="30" fill="#8BC34A"/>
              </svg>
              <div className="image-label">{language === 'en' ? 'Smart Farming' : 'स्मार्ट शेती'}</div>
            </div>
            <div className="hero-image-card">
              <svg viewBox="0 0 100 100" className="hero-svg">
                <circle cx="50" cy="50" r="45" fill="#2196F3" opacity="0.1"/>
                <rect x="20" y="35" width="60" height="40" rx="5" fill="#4CAF50"/>
                <circle cx="35" cy="50" r="8" fill="#333"/>
                <circle cx="65" cy="50" r="8" fill="#333"/>
                <rect x="25" y="28" width="15" height="10" fill="#FFC107"/>
                <path d="M50 75 L30 85 L30 80 L50 70 L70 80 L70 85 Z" fill="#333"/>
              </svg>
              <div className="image-label">{language === 'en' ? 'AI Advisory' : 'AI सल्लागार'}</div>
            </div>
            <div className="hero-image-card">
              <svg viewBox="0 0 100 100" className="hero-svg">
                <circle cx="50" cy="50" r="45" fill="#FF9800" opacity="0.1"/>
                <circle cx="50" cy="35" r="15" fill="#FFB74D"/>
                <path d="M50 50 L35 65 L35 85 L65 85 L65 65 Z" fill="#4CAF50"/>
                <rect x="42" y="60" width="16" height="25" fill="#81C784"/>
                <circle cx="42" cy="32" r="3" fill="#333"/>
                <circle cx="58" cy="32" r="3" fill="#333"/>
                <path d="M45 40 Q50 42 55 40" stroke="#333" fill="none" strokeWidth="2"/>
              </svg>
              <div className="image-label">{language === 'en' ? 'Farmers' : 'शेतकरी'}</div>
            </div>
            <div className="hero-image-card">
              <svg viewBox="0 0 100 100" className="hero-svg">
                <circle cx="50" cy="50" r="45" fill="#9C27B0" opacity="0.1"/>
                <rect x="35" y="30" width="30" height="40" rx="3" fill="#E1F5FE"/>
                <rect x="35" y="30" width="30" height="8" fill="#2196F3"/>
                <circle cx="50" cy="34" r="1.5" fill="white"/>
                <text x="50" y="50" fontSize="12" fill="#4CAF50" textAnchor="middle">📊</text>
                <text x="50" y="62" fontSize="8" fill="#666" textAnchor="middle">DATA</text>
              </svg>
              <div className="image-label">{language === 'en' ? 'Analytics' : 'विश्लेषण'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
