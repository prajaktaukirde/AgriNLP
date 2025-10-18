@echo off
echo Starting FET Development Server...
echo.

cd /d "%~dp0"

echo Current directory: %CD%
echo.

call npm run dev

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to start server!
    echo Please run INSTALL.bat first to install dependencies.
    pause
    exit /b %errorlevel%
)
