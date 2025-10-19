@echo off
echo Completing Git Merge...
git config core.editor "notepad"
timeout /t 2 /nobreak >nul
git pull origin main --no-edit
git push origin main
echo Done!
pause
