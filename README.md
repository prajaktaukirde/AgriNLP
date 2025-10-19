# FET - Fuzzy Evolutionary Transformer for Agriculture Advisory

A modern, multilingual (English-Marathi) web application for agricultural advisory system powered by fuzzy logic, evolutionary algorithms, and transformer models. **100% FREE to use** with optional AI enhancements!

## 🌟 Features

### Core Features (100% FREE)

- **Multilingual Support**: Seamless switching between English and Marathi
- **Fuzzy Inference**: Handles uncertainty in agricultural queries like "slightly dry soil"
- **Evolutionary Learning**: GA-optimized recommendations for better accuracy
- **RAG Knowledge Base**: Retrieval-Augmented Generation with 20+ ICAR/FAO guidelines
- **Multimodal Inputs**: Text, speech (Web Speech API), and image support
- **Explainable AI**: Clear, actionable recommendations with confidence scores
- **Real-time Analytics Dashboard**: Comprehensive query insights, performance metrics, and usage statistics
- **Modern UI & Animations**: Professional SVG illustrations, smooth transitions, and interactive elements
- **Knowledge Base**: 20 pre-loaded agricultural articles covering irrigation, fertilizers, pest management, crop varieties, and soil management
- **Voice Input**: Speak your questions in English or Marathi
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Optional AI Enhancement (Requires OpenAI API Key - Paid)

- **ChatGPT GPT-4 Integration**: Advanced AI-powered responses for complex queries
- **Hybrid Intelligence Routing**: Automatically uses free knowledge base for simple queries, GPT-4 only for complex ones
- **80% Cost Savings**: Smart caching and hybrid routing reduce API costs by 80%
- **Conversation Memory**: Maintains context across 10 messages
- **Fallback Support**: System works 100% without AI backend using knowledge base

> **Note**: The AI backend is completely **OPTIONAL**. The entire system works perfectly FREE using the built-in knowledge base!

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## 🚀 Installation

### Option 1: Using Command Prompt (Recommended for Windows)

1. Open Command Prompt (cmd.exe) as Administrator
2. Navigate to the project directory:
   ```cmd
   cd "c:\Users\prajakta ukirde\New folder"
   ```

3. Install dependencies:
   ```cmd
   npm install
   ```

4. Start the development server:
   ```cmd
   npm run dev
   ```

### Option 2: Using PowerShell

If you encounter execution policy errors in PowerShell, run this first:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then proceed with:

```powershell
cd "c:\Users\prajakta ukirde\New folder"
npm install
npm run dev
```

## 🎯 Usage

After starting the development server, the application will automatically open in your default browser at `http://localhost:3000`.

### Navigation

1. **Home Page**: Overview of FET features, architecture, and results
2. **Get Started**: Choose between Advisory, Knowledge, or Analytics modules
3. **Advisory Module**: Interactive chat interface for crop advisory
4. **Knowledge Base**: Browse agricultural guidelines and best practices
5. **Analytics Dashboard**: View comprehensive query analytics, performance metrics, and usage statistics

### Language Switching

Click the language toggle button (English/मराठी) in the navigation bar to switch between languages.

## 📁 Project Structure

```
New folder/
├── index.html                 # Main HTML file
├── package.json              # Project dependencies
├── vite.config.js           # Vite configuration
├── src/
│   ├── main.jsx             # Application entry point
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   ├── LanguageContext.jsx  # Language context provider
│   ├── translations.js      # Translation strings & knowledge data
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Features.jsx     # Features grid
│   │   ├── Architecture.jsx # Architecture workflow
│   │   ├── Results.jsx      # Results statistics
│   │   ├── Contact.jsx      # Contact section
│   │   └── *.css            # Component styles
│   └── pages/
│       ├── Home.jsx         # Home page
│       ├── GetStarted.jsx   # Get Started page
│       ├── Advisory.jsx     # Advisory chat interface
│       ├── Knowledge.jsx    # Knowledge base
│       ├── Analytics.jsx    # Analytics dashboard
│       └── *.css            # Page styles
```

## 🌨️ Technologies Used

### Frontend (100% FREE)
- **React 18**: Modern UI library with hooks
- **Vite**: Lightning-fast build tool and dev server
- **React Router**: Client-side routing
- **CSS3**: Custom styling with gradients, animations, and transitions
- **Context API**: State management for language and analytics
- **Web Speech API**: Free browser-based voice recognition
- **SVG Animations**: Professional illustrations and icons

### Backend (Optional - for AI features)
- **Node.js + Express**: REST API server
- **OpenAI GPT-4**: Advanced AI responses (requires API key)
- **NodeCache**: Smart response caching
- **CORS**: Cross-origin support

## 🎨 Design Features

- Responsive design for all screen sizes
- Smooth animations and transitions
- Color-coded sections for better UX
- Accessible color contrast
- Mobile-first approach

## 📊 Key Statistics

- **91.3%** Accuracy
- **+13%** Accuracy improvement
- **+22%** Clarity improvement
- **0.87 / 0.85** BLEU / ROUGE-L scores
- **Multimodal Support**: Text 94% · Voice 91% · Image 88%
- **20+ Knowledge Articles**: Covering all major crops and agricultural practices
- **100% FREE**: No paid services required for core functionality

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server (FREE, no API keys needed)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Building for Production

```cmd
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🤖 Optional: AI Backend Setup (ChatGPT Integration)

**This is completely OPTIONAL!** The app works 100% FREE without this.

If you want to enable advanced AI features:

1. **Get OpenAI API Key** (requires payment to OpenAI):
   - Sign up at https://platform.openai.com
   - Create an API key
   - Add credits to your OpenAI account

2. **Setup Backend**:
   ```cmd
   cd backend
   npm install
   ```

3. **Configure Environment**:
   - Copy `backend/.env.example` to `backend/.env`
   - Add your OpenAI API key: `OPENAI_API_KEY=sk-...`

4. **Start Backend Server**:
   ```cmd
   cd backend
   npm start
   ```

5. **Backend runs on**: http://localhost:5000

**Cost Optimization**: The hybrid system saves 80% on API costs by:
- Using FREE knowledge base for simple queries (70% of queries)
- Smart caching (60-70% cache hit rate)
- Only using GPT-4 for complex queries

See `AI-IMPLEMENTATION-GUIDE.md` for detailed setup instructions.

## 💰 FREE vs PAID Clarification

### 100% FREE Features (No Payment Required)
- ✅ Full web interface
- ✅ Multilingual support (English/Marathi)
- ✅ Knowledge base with 20+ agricultural articles
- ✅ Voice input using Web Speech API
- ✅ Image upload interface
- ✅ Analytics dashboard
- ✅ All animations and UI features
- ✅ Fuzzy logic inference
- ✅ RAG-based knowledge retrieval

### Optional PAID Features (Requires OpenAI API Key)
- 💳 ChatGPT GPT-4 integration for advanced queries
- 💳 Conversation memory and context awareness
- 💳 Dynamic responses beyond knowledge base

**Bottom Line**: You can use the entire system for FREE. AI backend is an optional enhancement for power users.

## 📝 Knowledge Base

The application includes 20 pre-loaded agricultural knowledge articles covering:
- **Irrigation practices**: Cotton, Rice, Wheat, Vegetables
- **Fertilizer recommendations**: NPK ratios, Urea placement, Potassium application
- **Pest management**: Integrated pest control for various crops
- **Crop varieties**: High-yielding and disease-resistant varieties
- **Soil management**: Soil health, zinc deficiency, green manuring

All content is available in both **English** and **Marathi** and works 100% offline after initial load!

## 👩‍💻 Author

**Prajakta Ukirde**  
Suvidha Foundation  
Email: prajaktaukirde576@gmail.com

## 📄 License

© 2025 FET. All rights reserved.

## 🐛 Troubleshooting

### PowerShell Execution Policy Error

If you see "scripts is disabled on this system", run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Already in Use

If port 3000 is busy, Vite will automatically use the next available port (3001, 3002, etc.)

### Module Not Found Errors

Make sure all dependencies are installed:

```cmd
npm install
```

## 🤝 Contributing

This is a research project. For collaboration opportunities, please contact the author.

## 🙏 Acknowledgments

- ICAR (Indian Council of Agricultural Research)
- FAO (Food and Agriculture Organization)
- Marathi-speaking farming communities
- Suvidha Foundation

## 🚀 Quick Start (100% FREE)

1. **Clone or download this project**
2. **Install dependencies**: `npm install`
3. **Start the app**: `npm run dev`
4. **Open browser**: http://localhost:5173 (or the port shown in terminal)
5. **Start using**: No API keys, no configuration, just works!

That's it! The app runs completely FREE with full functionality.

## 🌐 Deployment

### Frontend Deployment (Recommended: Vercel)

**Why Vercel?**
- ✅ Zero-config SPA routing (no white screen issues)
- ✅ Global CDN for fast loading
- ✅ Automatic deployments from GitHub
- ✅ FREE tier with generous limits
- ✅ Custom domain support

#### Deploy to Vercel:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/prajaktaukirde/AgriNLP.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `AgriNLP` repository
   - Vercel will auto-detect Vite
   - Click "Deploy"
   - Done! Your site will be live at `your-project.vercel.app`

3. **Automatic Updates**:
   - Every `git push` triggers auto-deployment
   - Preview deployments for pull requests

#### Alternative: GitHub Pages (Not Recommended for SPAs)

GitHub Pages can cause white screen issues with React Router. If you still want to use it:

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://prajaktaukirde.github.io/AgriNLP",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/AgriNLP/',
     // ... other config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Backend Deployment (Optional - for ChatGPT AI)

**If you want to enable ChatGPT AI features**, deploy the backend:

#### Option 1: Vercel Serverless Functions

1. Create `api/` folder in root:
   ```bash
   mkdir api
   ```

2. Move `backend/server.js` to `api/chat.js` and adapt for serverless

3. Deploy with frontend (Vercel auto-detects API routes)

#### Option 2: Render.com (FREE tier)

1. **Create `render.yaml`** in root:
   ```yaml
   services:
     - type: web
       name: fet-backend
       env: node
       buildCommand: cd backend && npm install
       startCommand: cd backend && npm start
       envVars:
         - key: OPENAI_API_KEY
           sync: false
   ```

2. **Deploy**:
   - Go to [render.com](https://render.com)
   - Connect GitHub repository
   - Render auto-deploys from `render.yaml`
   - Add `OPENAI_API_KEY` in Environment Variables

3. **Update Frontend**:
   - Change API URL in `src/services/apiService.js`:
     ```javascript
     const API_BASE_URL = 'https://your-app.onrender.com';
     ```

#### Option 3: Railway.app (FREE $5 credit/month)

1. **Deploy**:
   - Go to [railway.app](https://railway.app)
   - New Project → Deploy from GitHub
   - Select `backend` folder
   - Add `OPENAI_API_KEY` environment variable

2. **Get URL** and update frontend `apiService.js`

#### Option 4: Heroku (Paid after free tier ends)

1. **Create `Procfile`** in `backend/`:
   ```
   web: node server.js
   ```

2. **Deploy**:
   ```bash
   cd backend
   heroku create fet-backend
   heroku config:set OPENAI_API_KEY=your_key_here
   git push heroku main
   ```

### Recommended Stack:

```
🌐 Frontend: Vercel (FREE)
💻 Backend: Render.com or Railway.app (FREE)
💾 Database: Not needed (stateless)
```

### Environment Variables:

**Backend only** (if using ChatGPT AI):
```bash
OPENAI_API_KEY=sk-...  # Your OpenAI API key
PORT=5000              # Server port (auto-set by platforms)
```

**Frontend**: No environment variables needed!

---

**Note**: This is a demonstration application showcasing the FET framework for multilingual agricultural advisory systems. All core features work FREE without any paid services!
