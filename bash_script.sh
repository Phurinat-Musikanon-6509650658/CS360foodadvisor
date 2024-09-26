#!/bin/bash     
set -x                       

check_status() { 
  if [ $? -ne 0 ]; then 
    echo "Error: $1 failed. Exiting." 
    exit 1 
  fi 
}

# Check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Update package 
echo "Updating package..." 
sudo yum update -y                    
check_status "Package update"

# Install dev tools
install_devtool() { 
  echo "Installing Development Tools..."
  if ! sudo yum groupinstall 'Development Tools' -y; then
    echo "Error: Failed to install Development Tools."
    exit 1
  fi
}

# Install yarn if not exists
install_yarn() { 
  if command_exists yarn; then
    echo "Yarn is already installed."
  else
    echo "Installing Yarn..."
    npm install -g yarn
    check_status "Yarn installation"
  fi
}

# Install pm2 if not exists
install_pm2() { 
  if command_exists pm2; then
    echo "PM2 is already installed."
  else
    echo "Installing PM2..."
    npm install -g pm2
    check_status "PM2 installation"
  fi
}

# Install nvm if not exists and Node.js v16
install_nvm() { 
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    echo "NVM is already installed."
  else
    echo "Installing NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    check_status "NVM installation"
  fi
  echo "Installing Node.js v16..."
  nvm install 16
  nvm use 16
}

# Function to check and add env variables
check_and_add_env_var() {
  VAR_NAME=$1
  VAR_VALUE=$2
  if grep -q "^${VAR_NAME}=" .env; then
    echo "${VAR_NAME} already exists in .env."
  else
    echo "Adding ${VAR_NAME} to .env."
    echo "${VAR_NAME}=${VAR_VALUE}" >> .env
  fi
}

# Execute functions
install_nvm
install_devtool
install_yarn
install_pm2
source ~/.bashrc
clear

# Setup
cd api

check_and_add_env_var "HOST" "0.0.0.0"
check_and_add_env_var "PORT" "1337"
check_and_add_env_var "STRAPI_ADMIN_CLIENT_URL" "http://localhost:3000"
check_and_add_env_var "STRAPI_ADMIN_CLIENT_PREVIEW_SECRET" "$(openssl rand -base64 32)"

yarn & yarn seed
pm2 start yarn --name Backend -- develop

cd ../client

check_and_add_env_var "NEXT_PUBLIC_API_URL" "http://$(curl ipinfo.io/ip):1337"
check_and_add_env_var "NEXT_PUBLIC_API_URL" "http://127.0.0.1:1337"
check_and_add_env_var "PREVIEW_SECRET" "$(openssl rand -base64 32)"

yarn & yarn build
pm2 start yarn --name Frontend -- start
