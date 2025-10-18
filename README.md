# FET - Fuzzy Evolutionary Transformer for Agriculture Advisory

A modern, multilingual (English-Marathi) web application for agricultural advisory system powered by fuzzy logic, evolutionary algorithms, and transformer models.

## 🌟 Features

- **Multilingual Support**: Seamless switching between English and Marathi
- **Fuzzy Inference**: Handles uncertainty in agricultural queries
- **Evolutionary Learning**: GA-optimized recommendations
- **RAG Knowledge**: Retrieval-Augmented Generation with ICAR/FAO guidelines
- **Multimodal Inputs**: Text, speech, and image support
- **Explainable AI**: Clear, actionable recommendations with confidence scores

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

## 🛠️ Technologies Used

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **CSS3**: Custom styling with gradients and animations
- **Context API**: State management for language switching

## 🎨 Design Features

- Responsive design for all screen sizes
- Smooth animations and transitions
- Color-coded sections for better UX
- Accessible color contrast
- Mobile-first approach

## 📊 Key Statistics

- **91.3%** Accuracy
- **+22%** Clarity improvement
- **0.87 / 0.85** BLEU / ROUGE-L scores
- Multimodal support: Text 94% · Voice 91% · Image 88%

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Building for Production

```cmd
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📝 Knowledge Base

The application includes 6 pre-loaded agricultural knowledge articles covering:
- Irrigation practices
- Fertilizer recommendations
- Pest management
- Crop varieties
- Soil management

All content is available in both English and Marathi.

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

---

**Note**: This is a demonstration application showcasing the FET framework for multilingual agricultural advisory systems.
