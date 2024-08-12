# To-Do List Application

A full-stack To-Do List application built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).

## Live Demo

Check out the live demo of the application [here](https://fullstack-todo-list-eight.vercel.app/).

## Features

- **Real-time CRUD Operations:** Users can seamlessly add, update, and delete tasks.
- **User Authentication:** Secure user login and registration using JSON Web Token (JWT)-based authentication.
- **Responsive Design:** The application is fully responsive and works on all screen sizes.

## Tech Stack

- **Frontend:** ReactJS, HTML, CSS, JavaScript
- **Backend:** NodeJS, ExpressJS
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/fullstack-todo-list.git
   cd fullstack-todo-list
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up environment variables:**
<br/>Create a .env file in the root directory and add the following:<br/>
    ```bash  
    MONGO_URI=your_mongodb_connection_string
    USER="your_mongodb_user"
    PASS="your_mongodb_password"
    SECRET=your_jwt_secret
    REACT_APP_API_URL="your frontend url"
    ```
4. **Run the application:**
    ```bash
    npm start
    ```
5. **Access the application:**
    Open your browser and go to http://localhost:3000
