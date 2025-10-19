import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import { AnalyticsProvider } from './AnalyticsContext';
import { ConversationProvider } from './ConversationContext';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Advisory from './pages/Advisory';
import Knowledge from './pages/Knowledge';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <AnalyticsProvider>
        <ConversationProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/advisory" element={<Advisory />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Router>
        </ConversationProvider>
      </AnalyticsProvider>
    </LanguageProvider>
  );
}

export default App;
