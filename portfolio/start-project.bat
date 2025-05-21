@echo off
echo Starting Portfolio Project...
cd %~dp0

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed! Please install Node.js first.
    pause
    exit /b
)

:: Install dependencies if node_modules doesn't exist
if not exist node_modules\ (
    echo Installing dependencies...
    call npm install
)

:: Start the development server and open in default browser
echo Starting development server...
start http://localhost:3000
call npm start

pause 