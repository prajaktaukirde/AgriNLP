import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Features.css';

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: '🌍',
      title: t.features.multilingual.title,
      desc: t.features.multilingual.desc
    },
    {
      icon: '🔀',
      title: t.features.fuzzy.title,
      desc: t.features.fuzzy.desc
    },
    {
      icon: '🧬',
      title: t.features.evolutionary.title,
      desc: t.features.evolutionary.desc
    },
    {
      icon: '📚',
      title: t.features.rag.title,
      desc: t.features.rag.desc
    },
    {
      icon: '🎙️',
      title: t.features.multimodal.title,
      desc: t.features.multimodal.desc
    },
    {
      icon: '💡',
      title: t.features.explainable.title,
      desc: t.features.explainable.desc
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">{t.features.title}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
