# CS360 1/2567 Term Project: [FoodAdvisor]

## Group Information

- **Group Name:**  passFgotA

## Members

- Thanadech Parnniam	6509650435

- Pheera Phuangphi		6509650617

- Pattarapol Khaofon    6509650625

- Panuwat Kongmark    6509650633

- Phurinat Musikanon   6509650658

## Project Goal

The project goal is to improve the existing foodadvisor application by enhancing its features and simplifying the deployment process for users. The aim is to develop a web application that offers users a comprehensive platform for exploring and managing food-related content. It focuses on solving the problem of finding and managing food options through features like secure user registration, advanced search, community-driven reviews, and integration with external APIs for additional information.

### Features
- **Feature 1:** Log in
- **Feature 2:** Register
- **Feature 3:** Profile

### Technologies Used

- **Backend:** Strapi V4

- **Frontend:** React.js 

- **Hosting/Deployment:** AWS EC2

- **Database:**  SQLite

## How to deploy and run the project manually

**1. Create an EC2 Instance**
 - Use Amazon `EC2` to create a new instance.
 - Choose `Amazon Linux` as the AMI (Amazon Machine Image).
 - Set the instance type to `t2.medium` or higher.
 - Connect to your `EC2` instance via Command Prompt or Terminal.
 -  **Configure Security Group Rules**:
    -   **Type**:  `SSH`,  **Protocol**:  `TCP`,  **Port Range**:  `22`,  **Source**:  `::/0`
 
    -   **Type**:  `HTTP`,  **Protocol**:  `TCP`,  **Port Range**:  `80`,  **Source**:  `0.0.0.0/0, ::/0`
    
    -   **Type**:  `HTTPS`,  **Protocol**:  `TCP`,  **Port Range**:  `443`,  **Source**:  `0.0.0.0/0, ::/0` 
    
    -   **Type**:  `Custom TCP Rule`,  **Protocol**:  `TCP`,  **Port Range**:  `1337`,  **Source**:  `0.0.0.0/0`
    
    -   **Type**:  `Custom TCP Rule`,  **Protocol**:  `TCP`,  **Port Range**:  `3000`,  **Source**:  `0.0.0.0/0`
 
**2.Install Required Tools for the Project**
- System require :
	- git
	- node (version 16)
	- npm (6.0.0 or above)
	- yarn (version 1.22.22)
	- pm2 (version 5.4.2)
 - Run the following commands to install all necessary tools:
```bash
#Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash 	
source ~/.bashrc	
nvm install 16	
nvm use 16	
node -v
# Update the system 
sudo yum update -y 
# Install Git 
sudo yum install -y git 
# Install Development Tools 
sudo yum groupinstall 'Development Tools' -y 
# Install Yarn (Package manager for Node.js) 
npm install -g yarn
# Install PM2
npm install -g pm2
```

**3.Clone the Project from GitHub to EC2 Instance**
 - Use Git to clone the project repository:
```bash
git clone https://github.com/Phurinat-Musikanon-6509650658/CS360foodadvisor.git
```

**4.Setup environment for Project**
- Navigate into the project directory: `cd CS360foodadvisor`
- **Backend**
	- change directory to `api` and create file `.env` with command
	
	```bash
	nano .env

	#and then put this command int to .env file
	HOST=0.0.0.0
	PORT=1337
	STRAPI_ADMIN_CLIENT_URL=http://localhost:3000
	STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=ARNFCb9zrC9ZHm5hZzCigWivD40icS4s
	```

	- next exit nano and run this command

	```bash
	#random secret
	openssl rand -base64 32
	```
	- you will get random key and then keep this key replace in `.env` be hide `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=`

- **Frontend**
	- change directory to `client` and create file `.env`
	
	```bash
	NEXT_PUBLIC_API_URL=http://127.0.0.1:1337
	PREVIEW_SECRET=ARNFCb9zrC9ZHm5hZzCigWivD40icS4s
	```
- next exit nano and run this command

	```bash
	#random secret
	openssl rand -base64 32
	```
	- you will get random key and then keep this key replace in `.env` be hide `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=`

**5.Start the Strapi Server with PM2**
- **Backend**
	- Change directory into the `/api` folder by using `cd api`
	- Install all dependencies and seed the database by using `yarn && yarn seed`
	- Start the Strapi server by using 
	```bash
	pm2 start yarn --name BackendStrapi -- develop
	```
- **Frontend**
	- Change directory into `/client` folder by using `cd client`
	- Install all dependencies and seed the database by using `yarn`
	- Start the Strapi server by using 
	```bash
	pm2 start yarn --name FrontendStrapi -- develop`
	```
This will install the dependencies, fill your application with data and run your server. You can run these commands separately.

#### Credentials
-   Super Admin:
    
    -   email:  admin@strapidemo.com
    -   password: welcomeToStrapi123
-   Editor
    
    -   email:  editor@strapidemo.com
    -   password: welcomeToStrapi123
-   Author
    
    -   email:  author@strapidemo.com
    -   password: welcomeToStrapi123

## How to deploy and run the project using the provided bash script [Specify the bash script path in the repository]

**1. Create an EC2 Instance**
 - Log in to your AWS account and navigate to the `EC2 Dashboard.`
 - Click `Launch Instance` to create a new instance.
 - Choose `Ubuntu Server` as the AMI (Amazon Machine Image).
- Select `t2.medium`  as the instance type to ensure sufficient resources for your project.
 - **Configure Security Group Rules**:
    
    -   **Type**:  `SSH`,  **Protocol**:  `TCP`,  **Port Range**:  `22`,  **Source**:  `::/0`
        
    -   **Type**:  `HTTP`,  **Protocol**:  `TCP`,  **Port Range**:  `80`,  **Source**:  `0.0.0.0/0, ::/0`
        
    -   **Type**:  `HTTPS`,  **Protocol**:  `TCP`,  **Port Range**:  `443`,  **Source**:  `0.0.0.0/0, ::/0`
        
    -   **Type**:  `Custom TCP Rule`,  **Protocol**:  `TCP`,  **Port Range**:  `1337`,  **Source**:  `0.0.0.0/0`
        
    -   **Type**:  `Custom TCP Rule`,  **Protocol**:  `TCP`,  **Port Range**:  `3000`,  **Source**:  `0.0.0.0/0`
 - Create or choose an existing **key pair** to securely connect to the instance.
 - Launch the instance and wait for it to initialize.

**2. Connect to the EC2**

 - Obtain the public **IP address** from the EC2 dashboard.
 - Open the terminal and connect to the instance via SSH using the key pair
```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
```

**3. Run the Application Automatically Using the Bash Script**

Install Git Run the following commands
 ```bash
 #Update package
sudo yum update -y

#Install git
sudo yum install git -y

#Clone repository
git clone https://github.com/Phurinat-Musikanon-6509650658/CS360foodadvisor.git

#chang directory to project
cd CS360foodadvisor

#chang permission for execute
chmod +x bash_script.sh

#start project
./bash_script.sh
 ```
![image](https://github.com/user-attachments/assets/3e4f71f2-0a51-4a1f-999d-9fec108b8157)

## Unit and Integration Testing Overview
**1. The Importance of Unit and Integration Testing**
- Introduction to the differences between Unit and Integration testing:
	- Unit Testing: Testing individual pieces of code or functions to ensure correctness at a granular level.
	- Integration Testing: Testing the interactions between multiple pieces of code to verify that each unit works well when connected together.
 
**2. Unit Testing with Jest**
- Introduction to Jest: A JavaScript testing framework that is easy to use and supports writing Unit Tests effectively.
- Writing Unit Tests with Jest:
	- Initial setup of Jest
	- Example of testing a small function with Jest
	- Using Jest matchers, such as .toBe() and .toEqual()
 
**3. Integration Testing with Supertest**
- Introduction to Supertest: A tool for testing HTTP requests, specifically for API testing.
- Using Supertest with Jest for API testing:
	- How to install Supertest
	- Example of testing an API endpoint with Supertest
	- Setting up test data and checking the response status of the API
 
**4. API Testing in Strapi with Strapi Testing Utils**
- Introduction to Strapi Testing Utils: A set of testing tools developed to support Unit and Integration Testing for projects using Strapi.
- Using Strapi Testing Utils to test APIs and functions in Strapi

## Setting Up Tests
To set up the environment for testing, you’ll need to install Node.js, Git, and Yarn by following these steps:

**Step 1: Install NVM (Node Version Manager)**
1. Install NVM:
 ```bash
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
 ```
2. Load the NVM settings into the shell:
```bash
 source ~/.bashrc
```   
3. Install Node.js version 16:
```bash
nvm install 16
 ```  
4. Use Node.js version 16:
```bash
nvm use 16
```  
5. Verify the Node.js version:
```bash
node -v
```
 
**Step 2: Update the System** 

Run the following command to update all packages on the system:
```bash
sudo yum update -y
```

**Step 3: Install Git** 

Install Git using the command:
```bash
sudo yum install -y git
```

**Step 4: Install Yarn** 

install Yarn using npm:
```bash
npm install -g yarn
```

## Setting Up API and Client Tests
**Setting Up API Tests**

1. Navigate to the Client directory:
```bash
cd /CS360foodadvisor/api
```

2. Install dependencies, seed the database, and start the development server:
```bash
yarn install && yarn seed && yarn develop
```

**Setting Up Client Tests**

1. Navigate to the Client directory:
```bash
cd /CS360foodadvisor/client
```

2. Install dependencies and start the client development server:
```bash
yarn install && yarn dev
```

## Test File Structure

## Test Coverage

## Viewing Test Results

## Adding New Tests
