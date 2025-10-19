# 🌾 FET Agricultural Advisory System

## 🚀 Quick Deploy to Vercel (EASIEST METHOD!)

### **Option 1: One-Click Deploy** ⚡

1. **Double-click** the file: [`DEPLOY-TO-VERCEL.bat`](DEPLOY-TO-VERCEL.bat)
   - This will automatically commit and push your code to GitHub

2. **Go to Vercel**: https://vercel.com/new

3. **Import Your Repository**:
   - Click "Import Git Repository"
   - Select: **prajaktaukirde/AgriNLP**
   - Click "Import"

4. **Deploy Settings**:
   - **Framework Preset**: Vite ✅
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `dist` ✅
   
5. **Click "Deploy"** 🎯

6. **Done!** Your site will be live at: `https://agri-nlp.vercel.app` (or similar)

---

### **Option 2: Manual Vercel CLI**

If you prefer command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 📱 What You Get with Vercel:

✅ **Automatic HTTPS** - Secure by default  
✅ **Global CDN** - Fast worldwide  
✅ **Zero Config** - Just works!  
✅ **Auto Deploy** - Push to GitHub = Auto deploy  
✅ **Free Tier** - Perfect for this project  
✅ **Custom Domains** - Add your own later  

---

## 🎯 After Deployment:

Your FET Agricultural Advisory System will be accessible:
- 🌍 **Live URL**: Provided by Vercel after deploy
- 📊 **Analytics**: Vercel dashboard shows visitor stats
- 🔄 **Updates**: Just push to GitHub, Vercel auto-deploys!

---

## 📋 Project Features:

✅ **Bilingual Support** - English & Marathi  
✅ **Real-Time Analytics** - Track all queries  
✅ **Crop-Specific Advice** - Cotton, Wheat, Rice, Tomato  
✅ **Query Types**: Irrigation, Fertilizer, Pest, Varieties, Soil  
✅ **Source Citations** - ICAR, FAO, PAU guidelines  
✅ **Confidence Scores** - 85-94% accuracy  
✅ **FET Framework** - Fuzzy Evolutionary Transformer  

---

## 🛠️ Local Development:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure:

```
fet-agri-advisory/
├── src/
│   ├── components/        # UI components
│   ├── pages/            # Page components
│   │   ├── Advisory.jsx  # Main query interface
│   │   ├── Analytics.jsx # Real-time analytics
│   │   └── Knowledge.jsx # Knowledge base
│   ├── AnalyticsContext.jsx  # Query tracking
│   ├── LanguageContext.jsx   # Bilingual support
│   └── translations.js       # EN/MR translations
├── public/               # Static assets
├── vercel.json          # Vercel config
└── vite.config.js       # Vite config
```

---

## 🔧 Technologies:

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing
- **Context API** - State management
- **LocalStorage** - Data persistence
- **Vercel** - Hosting & deployment

---

## 📞 Support:

For issues or questions:
1. Check [DEPLOY-VERCEL-INSTRUCTIONS.md](DEPLOY-VERCEL-INSTRUCTIONS.md)
2. Check [QUERY_TEST_VERIFICATION.md](QUERY_TEST_VERIFICATION.md)
3. Vercel Docs: https://vercel.com/docs

---

## 🎓 Research:

This project implements the **Fuzzy Evolutionary Transformer (FET)** framework for multilingual agricultural advisory systems.

**Key Components**:
- **mBERT/mT5**: Multilingual transformer processing
- **Fuzzy Inference**: Handles uncertainty in queries
- **Evolutionary Optimization**: Knowledge base optimization
- **RAG**: Retrieval-Augmented Generation with citations

---

## 📄 License:

MIT License - Free for educational and research use

---

**Made with 🌾 for Indian Farmers**

**GitHub**: https://github.com/prajaktaukirde/AgriNLP  
**Deploy**: https://vercel.com/new
