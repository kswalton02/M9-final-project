# M9-final-project

## Overview
This project is a full-stack Task Tracker application built with Express routing, MongoDB integration, user authentication, protected routes, React frontend development, and Node.js. The application allows secure registration, login and CRUD (Create tasks, Read tasks, Update tasks and Delete tasks). JSON Web tokens (JWT) are used to handle user authentication.

## Features
User registration
User login with JWT authentication
Create tasks
View tasks
Update tasks
Delete tasks
Protected API routes
MongoDB Atlas

## Technologies Used
Node.js
Express
MongoDB / MongoDB Atlas
Mongoose
JWT authentication
Password hashing
Environment variables
React
CSS
GitHub
Vite
Axios
bcryptjs
dotenv
CORS

## Backend API Routes
GET /api/health
Confirms that the backend API is running.
 
POST /api/auth/register
Creates a new user account.
 
POST /api/auth/login
Logs in an existing user and returns a JWT token.
 
GET /api/tasks
Returns tasks for the authenticated user.
 
POST /api/tasks
Creates a new task for the authenticated user.
 
PUT /api/tasks/:id
Updates an existing task.
 
DELETE /api/tasks/:id
Deletes an existing task.

## Installation

### Backend
```command prompt
cd backend
npm install
npm run dev
```

### Frontend
```command prompt
cd frontend
npm install
npm run dev
```

## Screenshots
<img width="1920" height="1020" alt="Backend_Run" src="https://github.com/user-attachments/assets/1e8fa70f-e308-4ce2-894a-f4e09396ad05" />

<img width="1920" height="1020" alt="Frontend_Run" src="https://github.com/user-attachments/assets/7196fb87-b447-4680-a108-369bb672c295" />

<img width="1920" height="1020" alt="Register_Working" src="https://github.com/user-attachments/assets/317cd6c5-5fc6-4615-a0e9-1136c01d0ae5" />

<img width="1920" height="1020" alt="Task_after_Login" src="https://github.com/user-attachments/assets/53b2da2a-e7ac-4f5d-bbed-3824a5bf5af8" />

<img width="1920" height="1020" alt="New_Task" src="https://github.com/user-attachments/assets/dcbee795-a8cf-48c7-8823-b49a4b9dc5ac" />

<img width="1920" height="1020" alt="Task_update" src="https://github.com/user-attachments/assets/ada34293-edc1-4e55-9ce2-f8ef8e1f7092" />

<img width="1920" height="1020" alt="Task_Delete" src="https://github.com/user-attachments/assets/6af3eec9-8f87-4069-ae8c-41654dd6ecdf" />

<img width="1920" height="1020" alt="Task_creation" src="https://github.com/user-attachments/assets/7df8eeb3-365d-42b5-8313-84a9d15ce221" />

<img width="1920" height="1020" alt="Backend_health" src="https://github.com/user-attachments/assets/468645a1-acac-4767-99ca-74e1b3d9e190" />


## Known Issues
The application has not yet been deployed and runs locally. 

## Created By
Simone Walton
