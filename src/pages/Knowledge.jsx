import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations, knowledgeData } from '../translations';
import './Knowledge.css';

const Knowledge = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');

  const types = [
    t.knowledge.allTypes,
    t.knowledge.irrigation,
    t.knowledge.fertilizer,
    t.knowledge.pestManagement,
    t.knowledge.cropVarieties,
    t.knowledge.soilManagement
  ];

  const filteredData = knowledgeData.filter(item => {
    const matchesType = selectedType === t.knowledge.allTypes || item.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="knowledge">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>FET</div>
          <button onClick={() => navigate('/get-started')} className="btn btn-outline">
            {t.nav.backToHome}
          </button>
        </div>
      </nav>

      <div className="knowledge-container">
        <div className="knowledge-header">
          <input
            type="text"
            placeholder={t.knowledge.searchPlaceholder}
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          {types.map((type, index) => (
            <button
              key={index}
              className={`filter-tab ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="knowledge-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="knowledge-card">
              <div className="card-header">
                <span className="card-type">{item.type}</span>
                <div className="card-meta">
                  <span>• {item.crop}</span>
                  <span>• {item.region}</span>
                </div>
              </div>
              <h3 className="card-title">{item.title[language]}</h3>
              <p className="card-desc">{item.description[language]}</p>
              <div className="card-footer">
                <span className="card-source">Source: {item.source}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="no-results">
            <p>{language === 'en' ? 'No results found' : 'कोणतेही परिणाम आढळले नाहीत'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Knowledge;
