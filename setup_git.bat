@echo off
set "GIT_PATH=C:\Program Files\Git\cmd\git.exe"

if not exist "%GIT_PATH%" (
    echo Git not found at "C:\Program Files\Git\cmd\git.exe". Trying system 'git'...
    set "GIT_PATH=git"
)

echo Using Git at: "%GIT_PATH%"

if not exist .git (
    "%GIT_PATH%" init
)

echo Checking Git configuration...
"%GIT_PATH%" config user.email >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Git user.email not configured.
    set /p "GIT_EMAIL=Enter your email for Git: "
    call "%GIT_PATH%" config user.email "%%GIT_EMAIL%%"
)

"%GIT_PATH%" config user.name >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Git user.name not configured.
    set /p "GIT_NAME=Enter your name for Git: "
    call "%GIT_PATH%" config user.name "%%GIT_NAME%%"
)

"%GIT_PATH%" remote add origin https://github.com/rothaa/portfolio.git
if %errorlevel% neq 0 echo Remote 'origin' might already exist. Continuing...

"%GIT_PATH%" add .
"%GIT_PATH%" commit -m "Initial commit"
"%GIT_PATH%" branch -M main
"%GIT_PATH%" push -u origin main

echo.
echo Process completed.
pause
