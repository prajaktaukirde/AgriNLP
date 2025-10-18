import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const modules = [
    {
      title: t.getStartedPage.advisory.title,
      desc: t.getStartedPage.advisory.desc,
      icon: '💬',
      path: '/advisory'
    },
    {
      title: t.getStartedPage.knowledge.title,
      desc: t.getStartedPage.knowledge.desc,
      icon: '📚',
      path: '/knowledge'
    },
    {
      title: t.getStartedPage.analytics.title,
      desc: t.getStartedPage.analytics.desc,
      icon: '📊',
      path: '/analytics'
    }
  ];

  return (
    <div className="get-started">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>FET</div>
          <button onClick={() => navigate('/')} className="btn btn-outline">
            {t.nav.backToHome}
          </button>
        </div>
      </nav>

      <div className="get-started-container">
        <h1 className="page-title">{t.getStartedPage.title}</h1>
        <p className="page-subtitle">{t.getStartedPage.subtitle}</p>

        <div className="modules-grid">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="module-card"
              onClick={() => module.path !== '#' && navigate(module.path)}
              style={{ cursor: module.path !== '#' ? 'pointer' : 'default' }}
            >
              <div className="module-icon">{module.icon}</div>
              <h3 className="module-title">{module.title}</h3>
              <p className="module-desc">{module.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
