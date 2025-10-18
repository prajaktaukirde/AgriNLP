@echo off
echo Installing FET Application Dependencies...
echo.

cd /d "%~dp0"

echo Current directory: %CD%
echo.

echo Installing npm packages...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Installation failed!
    echo Please check your internet connection and try again.
    pause
    exit /b %errorlevel%
)

echo.
echo ================================
echo Installation completed successfully!
echo ================================
echo.
echo To start the development server, run:
echo     npm run dev
echo.
echo Or double-click the START-SERVER.bat file
echo.
pause
