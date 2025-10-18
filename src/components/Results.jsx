import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Results.css';

const Results = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="results" className="results">
      <div className="container">
        <h2 className="section-title">{t.results.title}</h2>
        
        <div className="results-grid">
          <div className="result-card">
            <div className="result-value">+13%</div>
            <div className="result-label">{t.results.accuracy}</div>
          </div>
          <div className="result-card">
            <div className="result-value">+22%</div>
            <div className="result-label">{t.results.clarity}</div>
          </div>
          <div className="result-card">
            <div className="result-value">{t.results.multimodal}</div>
            <div className="result-label">{t.results.multimodalDetails}</div>
          </div>
        </div>

        <p className="results-desc">{t.results.description}</p>
      </div>
    </section>
  );
};

export default Results;
