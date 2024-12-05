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
#### Unit Test

**Login Test**
```js
describe('Login and Register TEST', () => {
    let push;

    beforeEach(() => {
        push = jest.fn();
        useRouter.mockReturnValue({ push });
        fetch.resetMocks();
    });

    it('should login successfully and redirect to /profile', async () => {
        // Mock API response
        fetch.mockResponseOnce(JSON.stringify({ jwt: 'fake-jwt-token' }));

        render(<Login />);
        
        // Input identifier and password
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit the form
        fireEvent.click(screen.getByText('Login'));

        // Wait for redirection
        await waitFor(() => expect(push).toHaveBeenCalledWith('/profile'));
        expect(localStorage.getItem('token')).toBe('fake-jwt-token');
    });
    // Test implementation
})
```

- **Mock API Response**: The line `fetch.mockResponseOnce` simulates an API response, returning a JSON object with a `jwt` key and a token value (`'fake-jwt-token'`). This allows us to test without needing a real API connection.

- **Render Component**: The `render(<Login />)` function displays the `Login` component for testing.

- **Input Data**: `fireEvent.change` simulates entering data into the `Email` and `Password` fields.
   - `screen.getByPlaceholderText('Email')` finds the field with the placeholder `Email` and sets the value to `'user@example.com'`.
   - `screen.getByPlaceholderText('Password')` finds the password field and sets it to `'password123'`.

- **Click Login Button**: The `fireEvent.click` simulates clicking the button labeled `Login` to submit the login form.

- **Wait for Redirection**: The `waitFor` function waits for the `push` function to be called with the path `'/profile'`, confirming that, after a successful login, the page should redirect to the `profile` page.

- **Check Token in Local Storage**: The line `expect(localStorage.getItem('token')).toBe('fake-jwt-token')` confirms that the received token was stored in `localStorage`.

---

```js
    it('should display error message on login failure', async () => {
        fetch.mockResponseOnce(JSON.stringify({ error: { message: 'Invalid credentials' } }), { status: 400 });

        render(<Login />);

        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'wronguser@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getByText('Login'));

        await waitFor(() => screen.getByText('Invalid credentials'));
    });
```

- **Mock API Response**: The line `fetch.mockResponseOnce` simulates a failed API response, returning an error message (`'Invalid credentials'`) in JSON format and setting the status to `400`. This mimics an unsuccessful login attempt due to incorrect credentials.

- **Render Component**: The `render(<Login />)` function displays the `Login` component, allowing us to simulate user interactions and verify output.

- **Enter Incorrect Data**: 
   - `fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'wronguser@example.com' } })` simulates typing an incorrect email into the email field.
   - `fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } })` simulates typing an incorrect password into the password field.

- **Click Login Button**: `fireEvent.click(screen.getByText('Login'))` simulates clicking the login button to submit the form.

- **Wait for Error Message**: The `await waitFor(() => screen.getByText('Invalid credentials'))` line waits for the error message `'Invalid credentials'` to appear on the screen, confirming that the component correctly handles and displays login errors when 
  authentication fails.

---

**Register Test**
```js
describe('Login and Register TEST', () => {
    let push;

    beforeEach(() => {
        push = jest.fn();
        useRouter.mockReturnValue({ push });
        fetch.resetMocks();
    });

    it('should Register successfully and redirect to login page', async () => {
        fetch.mockResponseOnce(JSON.stringify({ jwt: 'fake-jwt-token' }));

        render(<Register/>);

        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test1' }});
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test1@gmail.com' }});
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test1pass' }});
        fireEvent.change(screen.getByPlaceholderText('Job'), { target: { value: 'Student' }});
        fireEvent.click(screen.getByText('Register'));

        await waitFor(() => expect(push).toHaveBeenCalledWith('/Login'));
    })
    // Test implementation
})
```

- **Mock API Response**: The `fetch.mockResponseOnce` line simulates a successful API response, returning a JSON object with a `jwt` key and a token value (`'fake-jwt-token'`). This is used to mock the registration success.

- **Render Component**: `render(<Register/>)` renders the `Register` component so that we can simulate user input and test functionality.

- **Enter Registration Information**:
   - `fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test1' }})` simulates typing a username (`'test1'`) into the Username field.
   - `fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test1@gmail.com' }})` simulates entering an email (`'test1@gmail.com'`).
   - `fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test1pass' }})` simulates typing a password (`'test1pass'`).
   - `fireEvent.change(screen.getByPlaceholderText('Job'), { target: { value: 'Student' }})` simulates entering a job title (`'Student'`).

- **Click Register Button**: `fireEvent.click(screen.getByText('Register'))` simulates clicking the register button to submit the form.

- **Wait for Redirection**: The `await waitFor(() => expect(push).toHaveBeenCalledWith('/Login'))` line waits until the `push` function is called with the path `'/Login'`, confirming that after successful registration, the user is redirected to the login page.

```js
it('should warning if use wrong Email format', async () => {
        fetch.mockResponseOnce(JSON.stringify({ error: { message: 'email must be a valid email' }}), { status: 400 })

        render(<Register/>);

        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test1' }});
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test1' }});
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test1pass' }});
        fireEvent.change(screen.getByPlaceholderText('Job'), { target: { value: 'Student' }});
        fireEvent.click(screen.getByText('Register'));

        await waitFor(() => screen.getByText('email must be a valid email'));
    })
```

- **Mock API Response**: `fetch.mockResponseOnce` simulates a failed response from the API, returning an error message (`'email must be a valid email'`) in JSON format with a `400` status code. This mocks the backend validation of the email format.

- **Render Component**: `render(<Register/>)` renders the `Register` component so we can interact with it.

- **Enter Registration Information with Invalid Email**:
   - `fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test1' }})` simulates typing `'test1'` as the username.
   - `fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test1' }})` simulates entering an invalid email format (`'test1'`), which is missing the typical structure of an email (like `@domain.com`).
   - `fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test1pass' }})` simulates entering `'test1pass'` as the password.
   - `fireEvent.change(screen.getByPlaceholderText('Job'), { target: { value: 'Student' }})` simulates entering `'Student'` as the job.

- **Click Register Button**: `fireEvent.click(screen.getByText('Register'))` simulates clicking the register button to submit the form.

- **Wait for Error Message**: `await waitFor(() => screen.getByText('email must be a valid email'))` waits for the error message `'email must be a valid email'` to appear on the screen, verifying that the component correctly displays a warning when an invalid email 
   format is used.

---
  
#### Integration Test
```js
describe('Login API Test', () => {
    it('should register', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "test1",
                email: "test1@gmail.com",
                password: "test1pass",
                job: "Student"
            })

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('jwt');
        userID = res.body.user.id;
    });
    // Test implementation
})
```

- **`it('should register', async () => { ... })`**  
   - Defines a test with the name **`should register`**.  
   - Uses the `async` keyword to support asynchronous operations.  

- **`const res = await request(strapi.server.httpServer)`**  
   - Utilizes **Supertest** to send an HTTP request to the Strapi server using `strapi.server.httpServer` to point to the server.  

- **`.post('/api/auth/local/register')`**  
   - Specifies a **POST** request to the endpoint `/api/auth/local/register`, which is Strapi’s endpoint for user registration.  

- **`.send({...})`**  
   - Sends data in JSON format to the server to create a new user with the following fields:  
      - `username`: The username  
      - `email`: The email address  
      - `password`: The password  
      - `job`: The user’s role or status, e.g., "Student"  

- **`expect(res.statusCode).toBe(200);`**  
   - Ensures that the response from the server has an HTTP status code of **200** (indicating successful registration).  

- **`expect(res.body).toHaveProperty('jwt');`**  
   - Verifies that the API response (`res.body`) contains the `jwt` property, which is the JSON Web Token used for authentication.  

- **`userID = res.body.user.id;`**  
   - Extracts the `id` of the newly registered user from the response (`res.body.user.id`) and stores it in the variable `userID` (which might be used in subsequent tests).  

---

```js
it('should return JWT token when login is successful', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local')
            .send({
                identifier: 'test1@gmail.com',
                password: 'test1pass',
            });

        // ตรวจสอบว่า response status = 200 และมี JWT ใน response
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('jwt');
        expect(typeof res.body.jwt).toBe('string');
        token = res.body.jwt;
    });
```

- **`it('should return JWT token when login is successful')` **  
   - This describes the behavior being tested: ensuring a JWT token is returned upon a successful login.

- **Send HTTP POST Request:**  
   ```js
   const res = await request(strapi.server.httpServer)
       .post('/api/auth/local')
       .send({
           identifier: 'test1@gmail.com',
           password: 'test1pass',
       });
   ```
   - **`request(strapi.server.httpServer)`**: Sends an HTTP request to the server (powered by Strapi).
   - **`.post('/api/auth/local')`**: Makes a POST request to the `/api/auth/local` endpoint, which is typically used for user authentication.
   - **`.send({...})`**: Sends the login credentials as the request body. It includes:
     - `identifier`: The user's email (`test1@gmail.com`).
     - `password`: The user's password (`test1pass`).

- **Verify HTTP Response Status Code**  
   ```js
   expect(res.statusCode).toBe(200);
   ```
   - Checks that the response status code is `200`, indicating a successful request.

- **Check for JWT in Response Body:**  
   ```js
   expect(res.body).toHaveProperty('jwt');
   expect(typeof res.body.jwt).toBe('string');
   ```
   - **`expect(res.body).toHaveProperty('jwt')`:** Ensures the response body contains a `jwt` property.
   - **`expect(typeof res.body.jwt).toBe('string')`:** Confirms that the `jwt` property is a string.

- **Store JWT Token:**  
   ```js
   token = res.body.jwt;
   ```
   - Saves the received JWT token into a variable (`token`) for potential use in other tests.

---

```js
it('should return error message when login fails', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local')
            .send({
                identifier: 'wrong-email@gmail.com',
                password: 'wrong-password',
            });

        // ตรวจสอบว่า response status = 400 และมีข้อความ error
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error.message).toBe('Invalid identifier or password');
    });
```

- **`it('should return error message when login fails', async () => { ... });`**  
   - This test verifies that the API correctly handles a failed login attempt by returning the expected error response.
   - The name clearly describes the intended outcome: an error message should be returned when the login fails.

- **Making a POST Request**
   ```javascript
   const res = await request(strapi.server.httpServer)
       .post('/api/auth/local')
       .send({
           identifier: 'wrong-email@gmail.com',
           password: 'wrong-password',
       });
   ```
   - **`request(strapi.server.httpServer)`**: Uses the `supertest` library to send HTTP requests to the server. Here, it targets the server instance provided by `strapi`.
   - **`.post('/api/auth/local')`**: Specifies the API endpoint for login.
   - **`.send({...})`**: Sends a JSON payload with incorrect credentials:
     - `identifier`: Email used for login (`wrong-email@gmail.com`).
     - `password`: Password used for login (`wrong-password`).

- **Assertions**:
   ```javascript
   expect(res.statusCode).toBe(400);
   ```
   - **Checks HTTP Status Code**: Ensures that the response has a `400` status code, which indicates a client error (e.g., invalid input).

   ```javascript
   expect(res.body).toHaveProperty('error');
   ```
   - **Checks Error Property**: Ensures that the response body contains an `error` property, indicating that the API correctly identifies the issue.

   ```javascript
   expect(res.body.error.message).toBe('Invalid identifier or password');
   ```
   - **Validates Error Message**: Verifies that the `message` field within the `error` object matches the expected error message: `"Invalid identifier or password"`.

---

```js
it('should error when EMAIL of Username are already in use', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "test1",
                email: "test1@gmail.com",
                password: "test1pass",
                job: "Student"
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.error.message).toBe("Email or Username are already taken");
    });
```

- **`it('should error when EMAIL of Username are already in use', async () => { ... });`**  
   - The test is described as: should error when EMAIL or Username are already in use
   - This indicates that the test ensures the API handles duplicate user registration attempts correctly.

- **HTTP Request**
   - The test sends a **POST** request to the `/api/auth/local/register` endpoint of the Strapi server
     ```javascript
     request(strapi.server.httpServer)
         .post('/api/auth/local/register')
         .send({
             username: "test1",
             email: "test1@gmail.com",
             password: "test1pass",
             job: "Student"
         });
     ```
   - The `send` method includes user data for registration
     - `username`: `"test1"`
     - `email`: `"test1@gmail.com"`
     - `password`: `"test1pass"`
     - `job`: `"Student"`

- **Expected Response**
   - The test checks that the server responds with
     ```javascript
     expect(res.statusCode).toBe(400);
     ```
     - The HTTP status code `400` indicates a **Bad Request**.
       
   - Additionally, it verifies that the error message in the response body matches
     ```javascript
     expect(res.body.error.message).toBe("Email or Username are already taken");
     ```
     - This ensures that the server explicitly informs the client about the issue.
    
- **Purpose**
   - This test confirms that the API prevents duplicate registrations by rejecting requests where either the `email` or `username` is already in use.
   - It also validates that the error message is clear and specific.

---

```js
it('should error if Register with wrong EMAIL format', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "testtest",
                email: "testtest@", // ขาด gmail.com
                password: "testtestpass",
                job: "Student"
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.error.message).toBe("email must be a valid email");
    });
```

- **`it('should error if Register with wrong EMAIL format', async () => { ... });`**  
   - This defines a test case with a description: **"should error if Register with wrong EMAIL format"**.
   - `async` is used because the test involves an asynchronous HTTP request.

- **HTTP Request**  
   ```javascript
   const res = await request(strapi.server.httpServer)
       .post('/api/auth/local/register')
       .send({
           username: "testtest",
           email: "testtest@", // Missing gmail.com
           password: "testtestpass",
           job: "Student"
       });
   ```
   - `request(strapi.server.httpServer)`: Initiates an HTTP request to the server.
   - `.post('/api/auth/local/register')`: Sends a POST request to the registration endpoint.
   - `.send({...})`: Sends the request body with the following fields:
     - `username`: A sample username.
     - `email`: An invalid email address (`testtest@`) missing the domain (e.g., `gmail.com`).
     - `password`: A sample password.
     - `job`: A sample job role.
   - The result of this request is stored in the `res` variable.

- **Assertions**  
   ```javascript
   expect(res.statusCode).toBe(400);
   expect(res.body.error.message).toBe("email must be a valid email");
   ```
   - `expect(res.statusCode).toBe(400);`: Checks that the server responds with a **400 Bad Request** status code, indicating a validation error.
   - `expect(res.body.error.message).toBe("email must be a valid email");`: Ensures the error message returned in the response body matches **"email must be a valid email"**, confirming that the server correctly identifies the invalid email format.

- **Context**  
   - The test is part of an endpoint validation process to ensure that only valid data can be used for user registration. 
   - By testing edge cases like invalid email formats, this ensures the robustness and security of the application.

---

```js
it('should error if not enter JOB when register', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "testtest1",
                email: "testtest1@gmail.com",
                password: "testtestpass",
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.error.message).toBe("job must be defined.");
    });
```

- **`it('should error if not enter JOB when register', async () => { ... });`**  
   - Defines a test case with the description: **"should error if not enter JOB when register"**.
   - The function is marked as `async` because the test involves an asynchronous HTTP request.

- **HTTP Request**
```javascript
const res = await request(strapi.server.httpServer)
    .post('/api/auth/local/register')
    .send({
        username: "testtest1",
        email: "testtest1@gmail.com",
        password: "testtestpass",
    });
```
  - **`request(strapi.server.httpServer)`**: Creates an HTTP request to the server.
  - **`.post('/api/auth/local/register')`**: Sends a POST request to the `/api/auth/local/register` endpoint.
  - **`.send({...})`**: Sends the request body with the following fields:
  - `username`: A sample username (`testtest1`).
  - `email`: A valid email address (`testtest1@gmail.com`).
  - `password`: A sample password (`testtestpass`).
  - **Note**: The `job` field is intentionally omitted in this test to simulate the missing required field scenario.
  - The result of this request is stored in the `res` variable.

- **Assertions**
```javascript
expect(res.statusCode).toBe(400);
expect(res.body.error.message).toBe("job must be defined.");
```
  - **`expect(res.statusCode).toBe(400);`**: Verifies that the server responds with a **400 Bad Request** status code, indicating a validation error.
  - **`expect(res.body.error.message).toBe("job must be defined.");`**: Checks that the server returns the correct error message: **"job must be defined."**, confirming that the `job` field is required

- **Context**
  - The test is part of the backend validation process for the registration feature.
  - It ensures that the server enforces the requirement for the `job` field, preventing incomplete or invalid data from being processed.

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

## Node.js CI Workflow

