
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

- **Frontend:** React.js , Next.js

- **Hosting/Deployment:** AWS EC2

- **Database:**  SQLite

## How to deploy and run the project manually

### **1. Create an EC2 Instance**
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
 
### **2.Install Required Tools for the Project**
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

### **3.Clone the Project from GitHub to EC2 Instance**
 - Use Git to clone the project repository:
```bash
git clone https://github.com/Phurinat-Musikanon-6509650658/CS360foodadvisor.git
```

### **4.Setup environment for Project**
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

### **5.Start the Strapi Server with PM2**
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
 ````
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

In this project we have 10 test cases divided into 4 Unit test and 6 Integration test

## Setting Up Before Tests
To set up the environment for testing, you’ll need to install Node.js, Git, and Yarn by following these steps:

-   Install test tools
    ```bash
        yarn add --dev jest supertest
    ```
-   in file  `package.json`  add  **test**  command to scripts section
    ```js
        # add test command to scripts section
        "scripts": {
            "develop": "strapi develop",
            "start": "strapi start",
            "build": "strapi build",
            "strapi": "strapi",
            "test":"jest --runInBand --coverage=true"
        },
    ```
    and add those lines at the bottom of file
    ```js
        "jest": {
            "collectCoverageFrom": [
                "src/api/**/*.js"
                ],
            "coverageReporters": [
                "clover",
                "json",
                "text"
                ],
            "testPathIgnorePatterns": [
                "/node_modules/",
                ".tmp",
                ".cache"
                ],
            "modulePathIgnorePatterns": [
                "./build"
                ],
            "testEnvironment": "node"
        }
	```

## Setting Up API and Client Tests
**Setting Up API Tests**

1. Navigate to the Client directory:
```bash
cd /CS360foodadvisor/api
```

2. Install dependencies, and start test:
```bash
yarn install && yarn test
```

**Setting Up Client Tests**

1. Navigate to the Client directory:
```bash
cd /CS360foodadvisor/client
```

2. Install dependencies and start test:
```bash
yarn install && yarn test
```

## Test File Structure

#### Integration Test (branch 'develop-integration-test')
```
CS360foodadvisor/
├── api/
│   └── tests/
│       └── auth/
│           └── index.js           
├── client/
│   └── tests/
│       ├── auth/
│       │   ├── login.test.js          
│       │   └── register.test.js       

```

#### Integration Test (branch 'develop-integration-test')
```
CS360foodadvisor/
├── api/
│   └── tests/
│       └── auth/
│           └── index.js           
├── client/
│   └── tests/
│       ├── auth/
│       │   ├── login.test.js          
│       │   └── register.test.js       

```

## Test Coverage
### Unit Test
**Login Test Cases:**

1.  **Successful Login and Redirect:**
    -   Simulates valid user credentials.
    -   Checks if the user is redirected to the profile page after login.
    -   Verifies the token is stored in localStorage.
2.  **Login Failure with Error Message:**
    -   Simulates incorrect user credentials.
    -   Checks if the appropriate error message ("Invalid credentials") is displayed.

**Registration Test Cases:**

1.  **Successful Registration and Redirect:**
    -   Simulates valid user input for registration.
    -   Verifies redirection to the login page after successful registration.
    
2.  **Invalid Email Format Warning:**
    -   Simulates registration with an invalid email format.
    -   Checks if an appropriate error message ("email must be a valid email") is displayed.
---
  
### Integration Test

-   **User Registration Test**
    -   Validates successful user registration with valid inputs.
-   **Login with Correct Credentials**
    -   Ensures that a user receives a JWT token upon successful login.
-   **Login with Incorrect Credentials**
    -   Verifies that an error message is returned when the login attempt fails.
-   **Duplicate Registration**
    -   Ensures that duplicate email or username registrations are rejected.
-   **Invalid Email Format**
    -   Validates that the system correctly identifies and rejects invalid email formats.
-   **Missing Job Field in Registration**
    -   Ensures that the registration process fails if the required `job` field is not provided.
---

## Viewing Test Results
#### Unit Test (branch 'develop-unit-test')
```
 PASS __test__/Register.test.js
PASS __test__/Login.test.js
-------------------------------------------------------|---------|----------|---------|---------|---------------------------------------
File                                                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                     
-------------------------------------------------------|---------|----------|---------|---------|---------------------------------------
All files                                              |   11.29 |    27.84 |   19.51 |   11.29 |                                       
 adapters/article                                      |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-21                                  
 adapters/restaurant                                   |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-21                                  
 components                                            |   56.75 |       25 |   66.66 |   56.75 |                                       
  layout.js                                            |     100 |       50 |     100 |     100 | 11                                    
  no-results.js                                        |       0 |        0 |       0 |       0 | 1-34                                  
  seo.js                                               |   68.42 |       20 |     100 |   68.42 | 25-50,85-88                           
 components/blocks/Cta                                 |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-54                                  
 components/blocks/CtaCommandLine                      |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-29                                  
 components/blocks/Faq                                 |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-22                                  
  questions-answers.js                                 |       0 |        0 |       0 |       0 | 1-30                                  
 components/blocks/Features                            |       0 |        0 |       0 |       0 |                                       
  feature-cards.js                                     |       0 |        0 |       0 |       0 | 1-34                                  
  index.js                                             |       0 |        0 |       0 |       0 | 1-15                                  
 components/blocks/FeaturesWithImages                  |       0 |        0 |       0 |       0 |                                       
  features-check.js                                    |       0 |        0 |       0 |       0 | 1-35                                  
  index.js                                             |       0 |        0 |       0 |       0 | 1-45                                  
 components/blocks/Hero                                |       0 |        0 |       0 |       0 |                                       
  image-cards.js                                       |       0 |        0 |       0 |       0 | 1-41                                  
  index.js                                             |       0 |        0 |       0 |       0 | 1-52                                  
 components/blocks/Pricing                             |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-87                                  
 components/blocks/RelatedArticles                     |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-25                                  
 components/blocks/RelatedRestaurants                  |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-25                                  
 components/blocks/Team                                |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-15                                  
  member-cards.js                                      |       0 |        0 |       0 |       0 | 1-40                                  
 components/blocks/Testimonial                         |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-53                                  
 components/global/Footer                              |   34.81 |    28.57 |   66.66 |   34.81 |                                       
  columns.js                                           |    37.5 |       50 |     100 |    37.5 | 8-27                                  
  index.js                                             |   74.46 |       25 |     100 |   74.46 | 20-22,27-32,36-38                     
  socialNetworks.js                                    |       0 |        0 |       0 |       0 | 1-56                                  
 components/global/Navbar                              |   48.25 |      100 |      40 |   48.25 |                                       
  cta.js                                               |   35.71 |      100 |       0 |   35.71 | 4-12                                  
  index.js                                             |     100 |      100 |     100 |     100 |                                       
  localSwitch.js                                       |   13.97 |      100 |       0 |   13.97 | 12-91                                 
  logo.js                                              |     100 |      100 |     100 |     100 |                                       
  nav.js                                               |   28.57 |      100 |       0 |   28.57 | 5-19                                  
 components/global/PreviewBanner                       |    9.37 |      100 |       0 |    9.37 |                                       
  index.js                                             |    9.37 |      100 |       0 |    9.37 | 2-30                                  
 components/pages/blog/ArticleCard                     |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-30                                  
 components/pages/blog/ArticleContent                  |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-72                                  
 components/pages/restaurant/RestaurantCard            |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-48                                  
 components/pages/restaurant/RestaurantContent         |       0 |        0 |       0 |       0 |                                       
  gallery.js                                           |       0 |        0 |       0 |       0 | 1-53                                  
  index.js                                             |       0 |        0 |       0 |       0 | 1-120                                 
  information.js                                       |       0 |        0 |       0 |       0 | 1-60                                  
  opening-hours.js                                     |       0 |        0 |       0 |       0 | 1-49                                  
  price.js                                             |       0 |        0 |       0 |       0 | 1-24                                  
  review-summary.js                                    |       0 |        0 |       0 |       0 | 1-11                                  
  stars.js                                             |       0 |        0 |       0 |       0 | 1-40                                  
 components/pages/restaurant/RestaurantContent/Reviews |       0 |        0 |       0 |       0 |                                       
  overall-rating.js                                    |       0 |        0 |       0 |       0 | 1-86                                  
  reviews.js                                           |       0 |        0 |       0 |       0 | 1-102                                 
 components/pages/restaurant/RichContent               |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-24                                  
 components/shared/BlockManager                        |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-183                                 
 components/shared/Container                           |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-11                                  
 components/shared/CustomLink                          |   33.33 |      100 |       0 |   33.33 |                                       
  index.js                                             |   33.33 |      100 |       0 |   33.33 | 4-17                                  
 components/shared/Header                              |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-19                                  
 components/shared/SocialLogo                          |    6.14 |      100 |       0 |    6.14 |                                       
  index.js                                             |    6.14 |      100 |       0 |    6.14 | 4-110                                 
 pages                                                 |       0 |        0 |       0 |       0 |                                       
  [[...slug]].js                                       |       0 |        0 |       0 |       0 | 1-61                                  
  _app.js                                              |       0 |        0 |       0 |       0 | 1-45                                  
  _document.js                                         |       0 |        0 |       0 |       0 | 1-34                                  
 pages/All_restaurants                                 |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-78                                  
 pages/Login                                           |     100 |      100 |     100 |     100 |                                       
  index.js                                             |     100 |      100 |     100 |     100 |                                       
 pages/Search                                          |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-17                                  
 pages/api                                             |       0 |        0 |       0 |       0 |                                       
  exit-preview.js                                      |       0 |        0 |       0 |       0 | 1-8                                   
  preview.js                                           |       0 |        0 |       0 |       0 | 1-29                                  
 pages/blog                                            |       0 |        0 |       0 |       0 |                                       
  [slug].js                                            |       0 |        0 |       0 |       0 | 1-61                                  
  index.js                                             |       0 |        0 |       0 |       0 | 1-191                                 
 pages/profile                                         |       0 |        0 |       0 |       0 |                                       
  index.js                                             |       0 |        0 |       0 |       0 | 1-118                                 
 pages/register                                        |     100 |      100 |     100 |     100 |                                       
  index.js                                             |     100 |      100 |     100 |     100 |                                       
 pages/restaurants                                     |       0 |        0 |       0 |       0 |                                       
  [slug].js                                            |       0 |        0 |       0 |       0 | 1-60                                  
  index.js                                             |       0 |        0 |       0 |       0 | 1-226                                 
 utils                                                 |   11.44 |      100 |       0 |   11.44 |                                       
  hooks.js                                             |   14.28 |      100 |       0 |   14.28 | 4-21                                  
  index.js                                             |    9.09 |      100 |       0 |    9.09 | 4-11,14-17,20-42,45-84,87-117,120-143 
  localize.js                                          |   15.27 |      100 |       0 |   15.27 | 5-9,12-23,25-40,43-50,53-72           
-------------------------------------------------------|---------|----------|---------|---------|---------------------------------------

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        5.28 s
```

#### Integration Test (branch 'develop-integration-test')
```
 PASS  test/app.test.js (9.047 s)
  strapi instance
    ✓ is defined (2 ms)
  Login API Test
    ✓ should register (178 ms)
    ✓ should return JWT token when login is successful (101 ms)
    ✓ should return error message when login fails (34 ms)
    ✓ should error when EMAIL of Username are already in use (20 ms)
    ✓ should error if Register with wrong EMAIL format (21 ms)
    ✓ should error if not enter JOB when register (28 ms)

-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |     100 |      100 |     100 |     100 |
 article/controllers         |     100 |      100 |     100 |     100 |
  article.js                 |     100 |      100 |     100 |     100 |
 article/routes              |     100 |      100 |     100 |     100 |
  article.js                 |     100 |      100 |     100 |     100 |
 article/services            |     100 |      100 |     100 |     100 |
  article.js                 |     100 |      100 |     100 |     100 |
 blog-page/controllers       |     100 |      100 |     100 |     100 |
  blog-page.js               |     100 |      100 |     100 |     100 |
 blog-page/routes            |     100 |      100 |     100 |     100 |
  blog-page.js               |     100 |      100 |     100 |     100 |
 blog-page/services          |     100 |      100 |     100 |     100 |
  blog-page.js               |     100 |      100 |     100 |     100 |
 category/controllers        |     100 |      100 |     100 |     100 |
  category.js                |     100 |      100 |     100 |     100 |
 category/routes             |     100 |      100 |     100 |     100 |
  category.js                |     100 |      100 |     100 |     100 |
 category/services           |     100 |      100 |     100 |     100 |
  category.js                |     100 |      100 |     100 |     100 |
 global/controllers          |     100 |      100 |     100 |     100 |
  global.js                  |     100 |      100 |     100 |     100 |
 global/routes               |     100 |      100 |     100 |     100 |
  global.js                  |     100 |      100 |     100 |     100 |
 global/services             |     100 |      100 |     100 |     100 |
  global.js                  |     100 |      100 |     100 |     100 |
 page/controllers            |     100 |      100 |     100 |     100 |
  page.js                    |     100 |      100 |     100 |     100 |
 page/routes                 |     100 |      100 |     100 |     100 |
  page.js                    |     100 |      100 |     100 |     100 |
 page/services               |     100 |      100 |     100 |     100 |
  page.js                    |     100 |      100 |     100 |     100 |
 place/controllers           |     100 |      100 |     100 |     100 |
  place.js                   |     100 |      100 |     100 |     100 |
 place/routes                |     100 |      100 |     100 |     100 |
  place.js                   |     100 |      100 |     100 |     100 |
 place/services              |     100 |      100 |     100 |     100 |
  place.js                   |     100 |      100 |     100 |     100 |
 restaurant-page/controllers |     100 |      100 |     100 |     100 |
  restaurant-page.js         |     100 |      100 |     100 |     100 |
 restaurant-page/routes      |     100 |      100 |     100 |     100 |
  restaurant-page.js         |     100 |      100 |     100 |     100 |
 restaurant-page/services    |     100 |      100 |     100 |     100 |
  restaurant-page.js         |     100 |      100 |     100 |     100 |
 restaurant/controllers      |     100 |      100 |     100 |     100 |
  restaurant.js              |     100 |      100 |     100 |     100 |
 restaurant/routes           |     100 |      100 |     100 |     100 |
  restaurant.js              |     100 |      100 |     100 |     100 |
 restaurant/services         |     100 |      100 |     100 |     100 |
  restaurant.js              |     100 |      100 |     100 |     100 |
 review/controllers          |     100 |      100 |     100 |     100 |
  review.js                  |     100 |      100 |     100 |     100 |
 review/routes               |     100 |      100 |     100 |     100 |
  review.js                  |     100 |      100 |     100 |     100 |
 review/services             |     100 |      100 |     100 |     100 |
  review.js                  |     100 |      100 |     100 |     100 |
-----------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        9.118 s
Ran all test suites.
Done in 10.20s.
```

## Adding New Tests
**1. Unit Test**
- go to branch 'develop-unit-test'
```bash
cd ./CS360foodadvisor/client/__test__
touch xxxxx.test.js
nano touch xxxxx.test.js
```
- and then make a new one
```js
describe('xxxxxx your feature name xxxxxx', () => {
  it('xxxxxx anything you want to test xxxxxx', () => {
    // Test implementation
  });
});
```

**2. Integration Test**
- go to branch 'develop-integration-test'
```bash
cd ./CS360foodadvisor/api/test/authen/
touch index.js
nano index.js
```
- and then make a new one
```js
describe('xxxxxx your feature name xxxxxx', () => {
  it('xxxxxx anything you want to test xxxxxx', () => {
  const res = await request(strapi.server.httpServer)
    // Test implementation
  });
});
```

## Git Action CI/CD Pipeline
### CI/CD Pipeline Overview
CI/CD (Continuous Integration/Continuous Delivery/Deployment) is a process and set of practices designed to help teams develop and deploy software more quickly and with higher quality. The CI/CD pipeline refers to the tools and steps created to automate and streamline these workflows.

### CIworkflow : CIworkflow.yml
**Trigger Conditions:**
- Triggered when:
   - A push is made to the develop_docker_ci branch.
   - A pull request targets the main branch.

- CIworkflow.yml

```yml
name: CIworkflow
run-name: ${{ github.actor }} is testing out GitHub Actions
on: 
    workflow_run:
        workflows:
          - IntegrationTest
        types:
          - completed
        
jobs:
  Build-docker-images:
    runs-on: ubuntu-latest
    
    steps:
      - name: Check out code
        uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
    
      - name: login docker
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Install Docker Compose
        run: |
          sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
          sudo chmod +x /usr/local/bin/docker-compose
          docker-compose --version  # To verify installation
          
      - name: Build docker image
        run: docker-compose -f ./docker-compose.yml up --build -d
        
      - name: Push to dockerHub
        run: |
          docker-compose -f ./docker-compose.yml push
```

### CDworkflow : CDworkflow.yml
**Trigger Conditions:**
- Triggered when:
   - A push is made to the develop_cd_workflow branch.
   - A pull request targets the main branch.

- CDworkflow.yml

```yml
name: CDworkflow

on: 
    workflow_run:
      workflows:
        - CIworkflow
      types:
        - completed

jobs:
  check-image-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout code
      - name: Checkout Repository
        uses: actions/checkout@v3    
        
      # Step 2: Check if Docker Image Exists
      - name: Check if Fronend Docker Image Exists
        id: check_frontend_image
        run: |
          REPOSITORY="${{ secrets.DOCKERHUB_USERNAME }}/${{ vars.FRONTEND_IMAGE }}"  
          TAG="latest"
          RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -u "${{ secrets.DOCKERHUB_USERNAME }}:${{ secrets.DOCKERHUB_TOKEN }}" https://hub.docker.com/v2/repositories/${REPOSITORY}/tags/${TAG}/)
          if [ "$RESPONSE" -ne 200 ]; then
              echo "Frontend Docker image not found. Exiting workflow."
              exit 1
          fi
          echo "Frontend Docker image exists. Proceeding to deployment."
      - name: Check if Backend Docker Image Exists
        id: check_backend_image
        run: |
          REPOSITORY="${{ secrets.DOCKERHUB_USERNAME }}/${{ vars.BACKEND_IMAGE }}"  
          TAG="latest"
          RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -u "${{ secrets.DOCKERHUB_USERNAME }}:${{ secrets.DOCKERHUB_TOKEN }}" https://hub.docker.com/v2/repositories/${REPOSITORY}/tags/${TAG}/)
          if [ "$RESPONSE" -ne 200 ]; then
              echo "Backend Docker image not found. Exiting workflow."
              exit 1
          fi
          echo "Backend Docker image exists. Proceeding to deployment."
      # Step 3: Set AWS Credentials in Environment Variables
      - name: Set AWS Credentials
        if: ${{ steps.check_frontend_image.outcome == 'success' && steps.check_backend_image.outcome == 'success'}}
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_SESSION_TOKEN: ${{ secrets.AWS_SESSION_TOKEN }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
        run: echo "AWS credentials set."

      - name: Create EC2 instance 
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_SESSION_TOKEN: ${{ secrets.AWS_SESSION_TOKEN }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
        run: |
          # Define instance details
          INSTANCE_ID=$(aws ec2 run-instances \
            --image-id ami-06b21ccaeff8cd686 \
            --instance-type t2.medium \
            --key-name ${{ secrets.AWS_KP_NAME }} \
            --security-group-ids ${{ secrets.AWS_SG_ID }} \
            --user-data file://user-data.sh \
            --query 'Instances[0].InstanceId' \
            --output text)
            
          echo "Instance ID: $INSTANCE_ID"
          
          # Wait for the instance to be running
          aws ec2 wait instance-running --instance-ids $INSTANCE_ID
          
          # Output the instance public DNS
          INSTANCE_PUBLIC_DNS=$(aws ec2 describe-instances \
            --instance-ids $INSTANCE_ID \
            --query 'Reservations[0].Instances[0].PublicDnsName' \
            --output text)
          echo "Instance Public DNS: $INSTANCE_PUBLIC_DNS"
          echo "INSTANCE_PUBLIC_DNS=$INSTANCE_PUBLIC_DNS" >> $GITHUB_ENV
          
          INSTANCE_PUBLIC_IPV4=$(aws ec2 describe-instances \
            --instance-ids $INSTANCE_ID \
            --query 'Reservations[0].Instances[0].PublicIpAddress' \
            --output text)
          echo "Instance Public IPv4: $INSTANCE_PUBLIC_IPV4"
          echo "INSTANCE_PUBLIC_IPV4=$INSTANCE_PUBLIC_IPV4" >> $GITHUB_ENV
          sleep 5
      - name: Connect to instance and pull deploy docker images
        env:
            PRIVATE_KEY: ${{ secrets.KEY_PEM_DATA }}
            REPOSITORYBACK: "${{ secrets.DOCKERHUB_USERNAME }}/${{ vars.BACKEND_IMAGE }}"
            REPOSITORYFRONT: "${{ secrets.DOCKERHUB_USERNAME }}/${{ vars.FRONTEND_IMAGE }}"
        run: |
          echo "$PRIVATE_KEY" > private_key && chmod 600 private_key
          ssh -o StrictHostKeyChecking=no -i private_key ${{ secrets.SSH_USER }}@${{ env.INSTANCE_PUBLIC_DNS }} << EOF
          sudo yum install -y docker
          sudo service docker start
          echo "BACKEND"
          sudo docker pull $REPOSITORYBACK:latest
          sudo docker run -d --name ${{ vars.BACKEND_IMAGE }} \
          -p 1337:1337 \
          -e HOST=0.0.0.0 \
          -e PORT=1337 \
          -e STRAPI_ADMIN_CLIENT_URL=http://${INSTANCE_PUBLIC_IPV4}:3000 \
          -e STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=${{ secrets.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET }} \
          -e JWT_SECRET=${{ secrets.JWT_SECRET }} \
          $REPOSITORYBACK:latest
          echo "FRONTEND"
          echo $REPOSITORYFRONT:latest
          sudo docker pull $REPOSITORYFRONT:latest
          sudo docker run -d --name ${{ vars.FRONTEND_IMAGE }} \
          -p 3000:3000 \
          -e NEXT_PUBLIC_API_URL=http://${INSTANCE_PUBLIC_IPV4}:1337 \
          -e PREVIEW_SECRET=${{ secrets.PREVIEW_SECRET }} \
          $REPOSITORYFRONT:latest
          echo BackEnd http://${INSTANCE_PUBLIC_IPV4}:1337/
          echo FrontEnd http://${INSTANCE_PUBLIC_IPV4}:3000/
          EOF
```
