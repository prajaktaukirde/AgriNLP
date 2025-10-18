import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <a href={`mailto:${t.contact.email}`} className="contact-email">{t.contact.email}</a>
        <p className="copyright">{t.contact.copyright}</p>
      </div>
    </section>
  );
};

export default Contact;
