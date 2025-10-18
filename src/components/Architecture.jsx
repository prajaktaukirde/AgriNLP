import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Architecture.css';

const Architecture = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="architecture" className="architecture">
      <div className="container">
        <h2 className="section-title">{t.architecture.title}</h2>
        
        <div className="workflow">
          {t.architecture.steps.map((step, index) => (
            <div key={index} className="workflow-step">
              <div className="step-number">{index + 1}</div>
              <p className="step-text">{step}</p>
            </div>
          ))}
        </div>

        <div className="example-box">
          <p className="example-text">{t.architecture.example}</p>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
