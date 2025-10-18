export const translations = {
  en: {
    nav: {
      features: 'Features',
      architecture: 'Architecture',
      results: 'Results',
      contact: 'Contact',
      getStarted: 'Get Started',
      viewArchitecture: 'View Architecture',
      backToHome: 'Back to Home'
    },
    hero: {
      title: 'Fuzzy Evolutionary Transformer',
      subtitle: 'Multilingual, fuzzy-aware crop advisory that understands Marathi–English queries, optimizes with evolutionary learning, and is grounded via RAG.',
      accuracy: 'Accuracy',
      clarity: 'Clarity ↑',
      bleuRouge: 'BLEU / ROUGE-L'
    },
    features: {
      title: 'Key Features',
      multilingual: {
        title: 'Multilingual Understanding',
        desc: 'mBERT/mT5 embeddings fine-tuned on Marathi–English agri data.'
      },
      fuzzy: {
        title: 'Fuzzy Inference',
        desc: 'Handles uncertainty in phrases like \'slightly dry soil\'.'
      },
      evolutionary: {
        title: 'Evolutionary Learning',
        desc: 'GA optimizes membership functions and rule weights.'
      },
      rag: {
        title: 'RAG Knowledge',
        desc: 'Retrieves ICAR/FAO guidelines for grounded advice.'
      },
      multimodal: {
        title: 'Multimodal Inputs',
        desc: 'Accepts text, speech, and field images.'
      },
      explainable: {
        title: 'Explainable Output',
        desc: 'Rule-based explanations with confidence scores.'
      }
    },
    architecture: {
      title: 'Architecture & Workflow',
      steps: [
        'Query → transformer embeddings capture Marathi–English semantics.',
        'Fuzzy logic maps ambiguous phrases to linguistic sets.',
        'GA tunes fuzzy membership and rule weights over time.',
        'RAG fetches credible guidance (e.g., ICAR) to ground outputs.',
        'Defuzzification → clear, actionable recommendation.'
      ],
      example: 'Example: "माझ्या cotton ला थोडं पाणी कमी पडतंय, काय करावं?" → Maintain soil moisture with light irrigation every 3 days.'
    },
    results: {
      title: 'Results',
      accuracy: 'Accuracy',
      clarity: 'Clarity',
      multimodal: 'Multimodal',
      multimodalDetails: 'Text 94% · Voice 91% · Image 88%',
      description: 'Outperforms AgriBot and AgriLLM across understanding, clarity, and reliability.'
    },
    contact: {
      title: 'Ready to collaborate or deploy?',
      subtitle: 'Contact Prajakta Ukirde · Suvidha Foundation',
      email: 'prajaktaukirde576@gmail.com',
      copyright: '© 2025 FET. All rights reserved.'
    },
    getStartedPage: {
      title: 'Get Started · FET Advisory System',
      subtitle: 'Choose a module to begin: Advisory, Knowledge, or Analytics.',
      advisory: {
        title: 'Advisory',
        desc: 'Get multilingual crop advisory with fuzzy reasoning and RAG-powered recommendations.'
      },
      knowledge: {
        title: 'Knowledge',
        desc: 'Browse agricultural knowledge base with ICAR/FAO guidelines and best practices.'
      },
      analytics: {
        title: 'Analytics',
        desc: 'View query analytics, confidence metrics, and system performance insights.'
      }
    },
    advisory: {
      title: 'Multilingual Agriculture Intelligence',
      quickQueries: 'Quick queries:',
      queries: [
        'My cotton has moderate water deficiency. What to do?',
        'How often to irrigate tomatoes with drip?',
        'How much urea should I apply?'
      ],
      greeting: 'Hello (Namaskar)',
      subtitle: 'Ask me anything about crops, irrigation, fertilizers, or pest control.',
      placeholder: 'Type your question here...'
    },
    knowledge: {
      searchPlaceholder: 'Search by crop, region, or topic...',
      allTypes: 'All Types',
      irrigation: 'Irrigation',
      fertilizer: 'Fertilizer',
      pestManagement: 'Pest Management',
      cropVarieties: 'Crop Varieties',
      soilManagement: 'Soil Management'
    },
    analytics: {
      title: 'Analytics Dashboard',
      subtitle: 'Query insights, performance metrics, and usage statistics',
      overview: 'Overview',
      totalQueries: 'Total Queries',
      avgConfidence: 'Avg Confidence',
      avgResponseTime: 'Avg Response Time',
      successRate: 'Success Rate',
      fromLastMonth: 'from last month',
      queryTrends: 'Query Trends',
      queryTrendsDesc: 'Number of queries over the last 6 months',
      confidenceMetrics: 'Confidence Metrics',
      confidenceMetricsDesc: 'Distribution of confidence scores',
      topCrops: 'Top Crops Queried',
      topCropsDesc: 'Most frequently queried crops',
      queryDistribution: 'Query Distribution by Type',
      queryDistributionDesc: 'Breakdown by query category',
      regionalUsage: 'Regional Usage',
      regionalUsageDesc: 'Queries by region',
      languageDistribution: 'Language Distribution',
      languageDistributionDesc: 'Query language preferences',
      english: 'English',
      marathi: 'Marathi',
      mixed: 'Mixed'
    }
  },
  mr: {
    nav: {
      features: 'वैशिष्ट्ये',
      architecture: 'आर्किटेक्चर',
      results: 'परिणाम',
      contact: 'संपर्क',
      getStarted: 'सुरू करा',
      viewArchitecture: 'आर्किटेक्चर पहा',
      backToHome: 'मुख्य पानावर परत'
    },
    hero: {
      title: 'फझी इव्हॉल्यूशनरी ट्रान्सफॉर्मर',
      subtitle: 'मराठी–इंग्रजी मिश्र प्रश्न समजणारी, फजी लॉजिक आणि इव्हॉल्यूशनरी ऑप्टिमायझेशन वापरणारी, RAG द्वारे विश्वसनीय ज्ञानावर आधारित पिक सल्ला प्रणाली.',
      accuracy: 'अचूकता',
      clarity: 'स्पष्टता ↑',
      bleuRouge: 'BLEU / ROUGE‑L'
    },
    features: {
      title: 'मुख्य वैशिष्ट्ये',
      multilingual: {
        title: 'बहुभाषिक समज',
        desc: 'Marathi–English कृषी डेटावर फाइन-ट्यून केलेले mBERT/mT5 एम्बेडिंग्ज.'
      },
      fuzzy: {
        title: 'फजी इनफरन्स',
        desc: '\'थोडी ओलसर माती\' सारख्या संदिग्ध वाक्यांचे अचूक मॅपिंग.'
      },
      evolutionary: {
        title: 'इव्हॉल्यूशनरी लर्निंग',
        desc: 'GA ने मेंबरशिप फंक्शन्स व नियम-वजनांचे ऑप्टिमायझेशन.'
      },
      rag: {
        title: 'RAG आधारित ज्ञान',
        desc: 'ICAR/FAO मार्गदर्शक तत्त्वांवर आधारित सल्ला.'
      },
      multimodal: {
        title: 'मल्टिमोडल इनपुट',
        desc: 'मजकूर, आवाज व प्रतिमा स्वीकारते.'
      },
      explainable: {
        title: 'समजण्यासारखा परिणाम',
        desc: 'नियम-आधारित स्पष्टीकरणे व विश्वास गुणांक.'
      }
    },
    architecture: {
      title: 'आर्किटेक्चर व कार्यप्रवाह',
      steps: [
        'क्वेरी → ट्रान्सफॉर्मर एम्बेडिंग्ज मराठी–इंग्रजी सेमँटिक्स पकडतात.',
        'फजी लॉजिक संदिग्ध वाक्यांना भाषिक संचात नकाशित करते.',
        'GA वेळोवेळी मेंबरशिप व नियम-वजन सुधारते.',
        'RAG विश्वसनीय स्रोतांमधून (उदा., ICAR) संदर्भ आणते.',
        'डिफजीफिकेशन → स्पष्ट, क्रियांत्मक शिफारस.'
      ],
      example: 'उदा.: "माझ्या cotton ला थोडं पाणी कमी पडतंय, काय करावं?" → फुलो-यात दर ३ दिवसांनी हलके सिंचन करा.'
    },
    results: {
      title: 'परिणाम',
      accuracy: 'अचूकता',
      clarity: 'स्पष्टता',
      multimodal: 'मल्टिमोडल',
      multimodalDetails: 'Text 94% · Voice 91% · Image 88%',
      description: 'AgriBot आणि AgriLLM पेक्षा चांगली समज, स्पष्टता व विश्वसनीयता.'
    },
    contact: {
      title: 'सहकार्य किंवा तैनातीसाठी तयार?',
      subtitle: 'संपर्क: Prajakta Ukirde · Suvidha Foundation',
      email: 'prajaktaukirde576@gmail.com',
      copyright: '© 2025 FET. All rights reserved.'
    },
    getStartedPage: {
      title: 'सुरू करा · FET सल्ला प्रणाली',
      subtitle: 'मॉड्यूल निवडा: सल्ला, ज्ञान, किंवा विश्लेषणे.',
      advisory: {
        title: 'सल्ला',
        desc: 'फजी रीझनिंग आणि RAG-संचालित शिफारशींसह बहुभाषिक पीक सल्ला मिळवा.'
      },
      knowledge: {
        title: 'ज्ञान',
        desc: 'ICAR/FAO मार्गदर्शक तत्त्वे आणि सर्वोत्तम पद्धतींसह कृषी ज्ञान संच पहा.'
      },
      analytics: {
        title: 'विश्लेषणे',
        desc: 'क्वेरी विश्लेषण, विश्वास मेट्रिक्स आणि सिस्टम कार्यप्रदर्शन पहा.'
      }
    },
    advisory: {
      title: 'बहुभाषिक कृषी बुद्धिमत्ता',
      quickQueries: 'द्रुत प्रश्न:',
      queries: [
        'माझ्या कापसाला मध्यम पाणी कमतरता आहे. काय करावे?',
        'टोमॅटोला ठिबक सिंचनाने किती वेळा पाणी द्यावे?',
        'मी किती युरिया वापरावे?'
      ],
      greeting: 'नमस्कार',
      subtitle: 'पिके, सिंचन, खते किंवा कीटक नियंत्रण बद्दल काहीही विचारा.',
      placeholder: 'तुमचा प्रश्न येथे टाइप करा...'
    },
    knowledge: {
      searchPlaceholder: 'पीक, प्रदेश किंवा विषयानुसार शोधा...',
      allTypes: 'सर्व प्रकार',
      irrigation: 'सिंचन',
      fertilizer: 'खत',
      pestManagement: 'कीटक व्यवस्थापन',
      cropVarieties: 'पीक प्रकार',
      soilManagement: 'माती व्यवस्थापन'
    },
    analytics: {
      title: 'विश्लेषण डॅशबोर्ड',
      subtitle: 'क्वेरी अंतर्दृष्टी, कार्यप्रदर्शन मेट्रिक्स आणि वापर आकडेवारी',
      overview: 'आढावा',
      totalQueries: 'एकूण प्रश्न',
      avgConfidence: 'सरासरी विश्वास',
      avgResponseTime: 'सरासरी प्रतिसाद वेळ',
      successRate: 'यश दर',
      fromLastMonth: 'मागील महिन्यापासून',
      queryTrends: 'क्वेरी ट्रेंड',
      queryTrendsDesc: 'गेल्या ६ महिन्यांतील प्रश्नांची संख्या',
      confidenceMetrics: 'विश्वास मेट्रिक्स',
      confidenceMetricsDesc: 'विश्वास गुणांकांचे वितरण',
      topCrops: 'सर्वाधिक विचारलेली पिके',
      topCropsDesc: 'वारंवार विचारली जाणारी पिके',
      queryDistribution: 'प्रकारानुसार क्वेरी वितरण',
      queryDistributionDesc: 'श्रेणीनुसार विभागणी',
      regionalUsage: 'प्रादेशिक वापर',
      regionalUsageDesc: 'प्रदेशानुसार प्रश्न',
      languageDistribution: 'भाषा वितरण',
      languageDistributionDesc: 'भाषा प्राधान्ये',
      english: 'इंग्रजी',
      marathi: 'मराठी',
      mixed: 'मिश्र'
    }
  }
};

export const knowledgeData = [
  {
    id: 1,
    type: 'Irrigation',
    crop: 'Cotton',
    region: 'Maharashtra',
    title: {
      en: 'Cotton irrigation schedule for moderate water deficiency',
      mr: 'मध्यम पाणी कमतरतेसाठी कापूस सिंचन वेळापत्रक'
    },
    description: {
      en: 'Maintain soil moisture with light irrigation every 3 days during flowering stage.',
      mr: 'फुलांच्या अवस्थेत दर ३ दिवसांनी हलके सिंचन करून मातीची ओलावा राखा.'
    },
    source: 'ICAR Guidelines 2024'
  },
  {
    id: 2,
    type: 'Fertilizer',
    crop: 'Wheat',
    region: 'Punjab',
    title: {
      en: 'NPK fertilizer recommendations for wheat in Punjab region',
      mr: 'पंजाब प्रदेशातील गव्हासाठी NPK खत शिफारसी'
    },
    description: {
      en: 'Apply 120 kg N, 60 kg P2O5, 40 kg K2O per hectare in split doses.',
      mr: 'प्रति हेक्टर १२० किग्रॅ नायट्रोजन, ६० किग्रॅ फॉस्फरस, ४० किग्रॅ पोटॅश विभाजित डोसमध्ये द्या.'
    },
    source: 'Punjab Agricultural University'
  },
  {
    id: 3,
    type: 'Pest Management',
    crop: 'Rice',
    region: 'Tamil Nadu',
    title: {
      en: 'Integrated pest management for rice leaf folder',
      mr: 'तांदूळ पान फोल्डरसाठी एकात्मिक कीटक व्यवस्थापन'
    },
    description: {
      en: 'Use pheromone traps, field sanitation, and recommended bio-control agents.',
      mr: 'फेरोमोन सापळे, शेत स्वच्छता आणि शिफारस केलेले जैव-नियंत्रण एजंट वापरा.'
    },
    source: 'TNAU Research'
  },
  {
    id: 4,
    type: 'Crop Varieties',
    crop: 'Soybean',
    region: 'Madhya Pradesh',
    title: {
      en: 'Early-maturing soybean varieties for kharif season',
      mr: 'खरीप हंगामासाठी लवकर पिकणाऱ्या सोयाबीनच्या जाती'
    },
    description: {
      en: 'Consider JS 95-60 or JS 20-29 for early harvest and disease tolerance.',
      mr: 'लवकर कापणी आणि रोग प्रतिरोधकतेसाठी JS 95-60 किंवा JS 20-29 विचारात घ्या.'
    },
    source: 'State Agri Dept'
  },
  {
    id: 5,
    type: 'Soil Management',
    crop: 'Sugarcane',
    region: 'Uttar Pradesh',
    title: {
      en: 'Soil health improvement through green manuring',
      mr: 'हिरव्या खतांद्वारे मातीची सुधारणा'
    },
    description: {
      en: 'Incorporate dhaincha 45–50 days before planting to improve organic matter.',
      mr: 'सेंद्रिय पदार्थ सुधारण्यासाठी लागवडीच्या ४५–५० दिवस आधी ढैंचा मिसळा.'
    },
    source: 'ICAR'
  },
  {
    id: 6,
    type: 'Irrigation',
    crop: 'Vegetables',
    region: 'All India',
    title: {
      en: 'Drip irrigation best practices for vegetable crops',
      mr: 'भाजीपाला पिकांसाठी ठिबक सिंचन सर्वोत्तम पद्धती'
    },
    description: {
      en: 'Install drippers at 30-45 cm spacing. Water daily for 30-60 minutes based on crop stage.',
      mr: '३०-४५ सेमी अंतरावर ड्रिपर्स बसवा. पिकाच्या अवस्थेनुसार दररोज ३०-६० मिनिटे पाणी द्या.'
    },
    source: 'FAO'
  }
];
