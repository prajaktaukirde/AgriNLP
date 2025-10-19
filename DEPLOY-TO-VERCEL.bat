@echo off
echo ====================================
echo   FET AgriNLP - Vercel Deployment
echo ====================================
echo.

REM Close any stuck git processes
taskkill /F /IM vim.exe 2>nul
taskkill /F /IM vi.exe 2>nul

REM Reset git state
echo Resetting Git state...
git reset --hard HEAD
git clean -fd

REM Configure git editor
git config core.editor "notepad"

REM Add all files
echo Adding files...
git add .

REM Commit
echo Committing changes...
git commit -m "Configure for Vercel deployment"

REM Pull latest
echo Pulling latest from GitHub...
git pull origin main --no-edit --strategy-option=theirs

REM Push to GitHub
echo Pushing to GitHub...
git push origin main

echo.
echo ====================================
echo   SUCCESS! 
echo ====================================
echo.
echo Next steps:
echo 1. Go to https://vercel.com/new
echo 2. Import your GitHub repository: prajaktaukirde/AgriNLP
echo 3. Click Deploy!
echo.
echo Your site will be live in 2-3 minutes!
echo.
pause
