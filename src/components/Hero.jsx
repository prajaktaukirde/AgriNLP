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
            <div className="hero-image-card">🌾</div>
            <div className="hero-image-card">🚜</div>
            <div className="hero-image-card">👨‍🌾</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
