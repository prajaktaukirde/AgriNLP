import { useState, useRef, useEffect } from 'react';
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
  const [isListening, setIsListening] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
  const [imageResult, setImageResult] = useState(null);
  const recognitionRef = useRef(null);
  const fileInputRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'English' ? 'en-IN' : 'mr-IN';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [language]);

  // Voice input handler
  const handleVoiceSearch = () => {
    if (!recognitionRef.current) {
      alert(language === 'English' 
        ? 'Speech recognition not supported in this browser. Please use Chrome or Edge.'
        : 'या ब्राउझरमध्ये व्हॉइस इनपुट समर्थित नाही. कृपया Chrome किंवा Edge वापरा.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.lang = language === 'English' ? 'en-IN' : 'mr-IN';
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Image analysis for crop/disease identification
  const analyzeImageForKnowledge = (imageSrc) => {
    setIsAnalyzingImage(true);
    
    setTimeout(() => {
      // Simulated image analysis results matching knowledge base
      const imageAnalysisResults = [
        {
          crop: 'Cotton',
          type: 'Pest Management',
          query: language === 'English' ? 'bollworm cotton' : 'कापूस बोलवर्म',
          confidence: 89
        },
        {
          crop: 'Tomato',
          type: 'Pest Management',
          query: language === 'English' ? 'tomato blight' : 'टोमॅटो ब्लाइट',
          confidence: 87
        },
        {
          crop: 'Wheat',
          type: 'Fertilizer',
          query: language === 'English' ? 'wheat fertilizer' : 'गव्हा खत',
          confidence: 85
        },
        {
          crop: 'Rice',
          type: 'Irrigation',
          query: language === 'English' ? 'rice irrigation AWD' : 'तांदूळ सिंचन',
          confidence: 91
        }
      ];
      
      const result = imageAnalysisResults[Math.floor(Math.random() * imageAnalysisResults.length)];
      
      setImageResult(result);
      setSearchQuery(result.query);
      setSelectedType(result.type);
      setIsAnalyzingImage(false);
      setUploadedImage(null);
    }, 2000);
  };

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      alert(language === 'English' 
        ? 'Please upload a valid image file (JPG, PNG, etc.)'
        : 'कृपया वैध प्रतिमा फाइल अपलोड करा (JPG, PNG, इ.)');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageSrc = event.target.result;
      setUploadedImage(imageSrc);
      analyzeImageForKnowledge(imageSrc);
    };
    reader.readAsDataURL(file);
  };

  // Trigger file input
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

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
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <div className="search-container">
            <button 
              type="button" 
              onClick={handleImageClick}
              className="search-btn image-search-btn"
              title={language === 'English' ? 'Upload Image' : 'प्रतिमा अपलोड करा'}
              disabled={isAnalyzingImage}
            >
              {isAnalyzingImage ? '⏳' : '📷'}
            </button>
            <button 
              type="button" 
              onClick={handleVoiceSearch}
              className={`search-btn voice-search-btn ${isListening ? 'listening' : ''}`}
              title={language === 'English' ? 'Voice Search' : 'व्हॉइस शोध'}
            >
              {isListening ? '🔴' : '🎤'}
            </button>
            <input
              type="text"
              placeholder={t.knowledge.searchPlaceholder}
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {imageResult && (
            <div className="image-result-banner">
              <span className="result-icon">✅</span>
              <span className="result-text">
                {language === 'English' 
                  ? `Image analyzed: ${imageResult.crop} - ${imageResult.type} (Confidence: ${imageResult.confidence}%)`
                  : `प्रतिमा विश्लेषित: ${imageResult.crop} - ${imageResult.type} (विश्वास: ${imageResult.confidence}%)`}
              </span>
              <button 
                className="close-result-btn"
                onClick={() => setImageResult(null)}
              >×</button>
            </div>
          )}
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
