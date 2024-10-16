# Book Library API

A RESTful API for managing a library system. This API allows users to register, borrow books, return books, and manage book records. It is built with **Node.js**, **Express**, **MongoDB**, and **JWT** for authentication.

## Features

- **Books Management**: Add, view, update, and delete books.
- **User Management**: Register, view, update, and delete users.
- **Borrowing System**: Borrow and return books.
- **Authentication**: JWT-based authentication for protected routes.
- **Password Security**: User passwords are hashed using bcrypt.
- **Pagination**: Paginated results for books and users.

## Project Structure

book-library-api/ ├── controllers/ # Contains controllers for books, users, and borrowing │ ├── bookController.js # Controller for book-related operations │ ├── userController.js # Controller for user-related operations │ └── borrowController.js # Controller for borrow-related operations ├── middlewares/ # Contains middleware for authentication │ └── authMiddleware.js # Middleware for protecting routes with JWT ├── models/ # Contains Mongoose models for MongoDB collections │ ├── Book.js # Model for books │ ├── User.js # Model for users │ └── Borrow.js # Model for borrowing records ├── routes/ # Contains route definitions for different resources │ ├── bookRoutes.js # Routes for books │ ├── userRoutes.js # Routes for users │ └── borrowRoutes.js # Routes for borrowing ├── config/ # Contains configuration files │ └── db.js # MongoDB connection setup ├── server.js # Main server file ├── package.json # Project metadata and dependencies ├── .gitignore # Ignored files and directories ├── .env # Environment variables └── README.md # Project documentation


## Installation

### Step 1: Clone the repository


git clone https://github.com/yourusername/book-library-api.git
cd book-library-api

### Step 2: Install dependencies

npm install

### Step 3: Setup MongoDB

Install MongoDB locally or use MongoDB Atlas.
Create a .env file in the project root with the following content:

MONGO_URI=mongodb://localhost:27017/book-library
JWT_SECRET=jwt_secret_key


### Step 4: Run the API

node server.js

The API will be accessible at http://localhost:5000.



This **README.md** file includes the full project setup, installation instructions keeping everything self-contained in a single file.







