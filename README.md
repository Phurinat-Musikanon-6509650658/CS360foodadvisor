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
- **Feature 1 User Registration and Authentication**: Implement secure user login and registration, allowing users to save their preferences.
- **Feature 2 CRUD Operations**: Ensure full support for Create, Read, Update, and Delete operations for recipes or food items.
- **Feature 3 Search and Filter**: Add advanced search options and filters for users to easily find food options based on dietary preferences, cuisine types, or ratings.
- **Feature 4 Review and Rating System**: Allow users to leave reviews and rate food options, contributing to community feedback.
- **Feature 5 Bookmarking**: Enable users to bookmark their favorite recipes or restaurants for easy access later.

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

[ภาพ screen capture ของหน้าเว็บแอปพลิเคชันซึ่ง deploy ไวบ้ น EC2]

![image](https://github.com/user-attachments/assets/3e4f71f2-0a51-4a1f-999d-9fec108b8157)
