# 🚀 Deploy FET Agricultural Advisory to Vercel

## ✅ Files Configured:
- ✅ `vercel.json` - Vercel configuration for SPA routing
- ✅ `vite.config.js` - Changed base path from `/AgriNLP/` to `/` for Vercel

---

## 📋 Deployment Steps:

### **Option 1: Deploy via Vercel CLI (Recommended)**

1. **Install Vercel CLI globally** (one-time only):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project folder**:
   ```bash
   cd "c:\Users\prajakta ukirde\New folder"
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```
   - Choose your preferred login method (GitHub, GitLab, email)

4. **Deploy**:
   ```bash
   vercel
   ```
   - First time: Answer setup questions
     - Set up and deploy: **Yes**
     - Which scope: Choose your account
     - Link to existing project: **No**
     - Project name: **AgriNLP** (or press Enter)
     - In which directory is your code: **.**
     - Want to override settings: **No**
   
5. **Production Deploy**:
   ```bash
   vercel --prod
   ```

---

### **Option 2: Deploy via Vercel Website (Easiest)**

1. **Go to**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find: **prajaktaukirde/AgriNLP**
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Click "Deploy"**

5. **Wait 2-3 minutes** - Your site will be live!

---

## 🌐 Your Vercel URL:
After deployment, you'll get a URL like:
- **https://agri-nlp.vercel.app** (or similar)
- **Custom domain** can be added later in Vercel settings

---

## 🔄 Auto-Deploy on Git Push:
Once connected via Option 2, Vercel will automatically deploy when you push to GitHub!

```bash
git add .
git commit -m "Your changes"
git push origin main
```
↓
Vercel automatically builds and deploys! 🎉

---

## 📱 Features After Deployment:
✅ Automatic HTTPS
✅ Global CDN (fast worldwide)
✅ Automatic preview deployments for branches
✅ Zero configuration needed
✅ Free for personal projects

---

## 🛠️ If You Get Errors:

**Node Version Issue:**
Create `.nvmrc` file with content: `18`

**Build Fails:**
Check that all dependencies are in `package.json`

**Routing Issues:**
The `vercel.json` file handles this (already configured)

---

## 🎯 Recommended: Use Option 2 (Website)
It's the easiest and provides automatic deployments!
