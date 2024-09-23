
# CS360 1/2567 Term Project: [Project Name]

## Group Information

- **Group Name:**  คุณชาย

## Members

- Thanadech Parnniam 6509650435

- Pheera Phuangphi      6509650617

- Pattarapol Khaofon    6509650625

- Panuwat Kongmark    6509650633

- Phurinat Musikanon   6509650658

## Project Goal

The project goal is to improve the existing foodadvisor application by enhancing its features and simplifying the deployment process for users. The aim is to develop a web application that offers users a comprehensive platform for exploring and managing food-related content. It focuses on solving the problem of finding and managing food options through features like secure user registration, advanced search, community-driven reviews, and integration with external APIs for additional information.

### Features
- **Feature 1 User Registration and Authentication**: Implement secure user login and registration, allowing users to save their preferences.
- **Feature 2 CRUD Operations**: Ensure full support for Create, Read, Update, and Delete operations for recipes or food items.
- **Feature 3 Search and Filter**: Add advanced search options and filters for users to easily find food options based on dietary preferences, cuisine types, or ratings.
- **Feature 4 Review and Rating System**: Allow users to leave reviews and rate food options, contributing to community feedback.
- **Feature 5 Bookmarking**: Enable users to bookmark their favorite recipes or restaurants for easy access later.
- **Feature 6 API Integration**: Integrate with third-party APIs for nutrition information, recipe suggestions, or location-based services.
- **Feature 7 User Dashboard**: Create a personalized dashboard where users can view their activity, favorite items, and recommendations.
- **Feature 8 Documentation and Tutorials**: Enhance documentation and provide tutorials or guides for users on how to use the application effectively.
- **Feature 9 Responsive design for desktop users**

### Technologies Used

- **Backend:** Strapi V4

- **Frontend:** React.js 

- **Hosting/Deployment:** AWS EC2

- **Database:**  SQLite

## How to deploy and run the project manually

**1. Create an EC2 Instance**
 - Use Amazon EC2 to create a new instance.
 - Choose **Ubuntu Server** as the AMI (Amazon Machine Image).
 - Set the instance type to **t2.medium** or higher.
 - Connect to your EC2 instance via Command Prompt or Terminal.
 
**2.Install Required Tools for the Project**
 - Run the following commands to install all necessary tools:
```
# Update the system 
sudo yum update -y 
# Install Node.js 
sudo yum install -y nodejs 
# Install Git 
sudo yum install -y git 
# Install NPM (Node Package Manager) version 10.8.3 
sudo npm install -g npm@10.8.3 
# Install Development Tools 
sudo yum groupinstall 'Development Tools' -y 
# Install Yarn (Package manager for Node.js) 
npm install -g yarn
```

**3.Clone the Project from GitHub to EC2 Instance**
 - Use Git to clone the project repository:
 ```
 git clone https://github.com/Phurinat-Musikanon-6509650658/CS360foodadvisor.git
```

**4.Change Directory into Project**
- Navigate into the project directory: `cd CS360foodadvisor`

**5.Start the Strapi Server**
- Change directory into the `api` folder by using `cd api`
- Install all dependencies and seed the database by using `yarn && yarn seed`
- Start the Strapi server by using `yarn develop`

## How to deploy and run the project using the provided bash script [Specify the bash script path in the repo]

**1. Create an EC2 Instance**
 - Log in to your AWS account and navigate to the **EC2 Dashboard.**
 - Click **Launch Instance** to create a new instance.
 - Choose **Ubuntu Server** as the AMI (Amazon Machine Image).
 - Select **t2.medium**  as the instance type to ensure sufficient resources for your project.
 - Configure the security group, ensuring ports like **22 (SSH)** and **1337 (Strapi)** are open.
 - Create or choose an existing **key pair** to securely connect to the instance.
 - Launch the instance and wait for it to initialize.

**2. Connect to the EC2**

 - Obtain the public **IP address** from the EC2 dashboard.
 - Open the terminal and connect to the instance via SSH using the key pair
```
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
```

**3. Run the Application Automatically Using the Bash Script**

 - After connecting to your EC2 instance, the application will be deployed and run automatically by executing the bash script provided below.
```
#!/bin/bash                            
check_status() { 
  if [ $? -ne 0 ]; then 
    echo "Error: $1 failed. Exiting." 
    exit 1 
  fi 
}                                     

# Update package 
echo "Updating package..." 
sudo yum update 0-y                    

# install node.js 
install_node() { 
  echo "Intalling Node.js..." 
  sudo yum install -y nodejs 
  clear 
  check_status "Node.js installation" 
}                                     

# install git 
install_git() { 
  echo "Installing git..." 
  sudo yum install -y git 
  clear 
  check_status "Git installation" 
}              
                        

# install npm v10 
install_npm() { 
  echo "Installing npm..." 
  sudo npm install -g npm@10.8.3 
  clear 
  check_status "npm installation" 
}               
                 
# install dev tool 
install_devtool() { 
  echo "Installing Development Tool..." 
  sudo yum groupinstall 'Development Tools' -y 
  clear 
  check_status "Development tools installation" 
}         
                         
# install yarn 
install_yarn() { 
  echo "Installing yarn" 
  sudo npm install -g yarn 
  clear 
  check_status "yarn installation" 
}                       

# Clone project from github 
clone_repo() { 
  echo "Cloning the repository..." 
  git clone https://github.com/Phurinat-Musikanon-6509650658/CS360foodadvisor.git 
  clear 
  check_status "Cloning git repository" 
}                    

install_nvm() { 
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash 
  export NVM_DIR="$HOME/.nvm" 
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm 
  [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads 
nvm bash_completion 
  nvm install 16 
  nvm use 16 
  clear 
}         
                  
install_node
install_git
install_npm
install_devtool
install_yarn
clone_repo
cd CS360foodadvisor 
cd api
install_nvm
yarn
clear
yarn seed
clear
yarn develop
```

[ภาพ screen capture ของหน้าเว็บแอปพลิเคชันซึ่ง deploy ไวบ้ น EC2]

