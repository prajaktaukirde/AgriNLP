import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">FET</div>
        <ul className="nav-menu">
          <li><a href="#features">{t.nav.features}</a></li>
          <li><a href="#architecture">{t.nav.architecture}</a></li>
          <li><a href="#results">{t.nav.results}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
        <button onClick={toggleLanguage} className="lang-toggle">
          {language === 'en' ? 'मराठी' : 'English'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
