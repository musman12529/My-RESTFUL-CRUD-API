# My RESTful CRUD API

The My RESTful CRUD API project is a customizable and extensible API that allows developers to build and deploy their own RESTful services. It provides a foundation for creating APIs with various endpoints and functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Installation

1. Clone the repository to your local machine using:https://github.com/musman12529/My-RESTFUL-CRUD-API.git
2. Navigate to the project directory: cd My-RESTFUL-CRUD-API
3. Install the required dependencies using npm: npm install
4. Make sure you have MongoDB installed and running. Update the MongoDB connection URL in `app.js` to point to your MongoDB instance.
5. Start the server using: npm start
6. 
## Usage

Once the server is up and running, you can use API testing tools like [Postman](https://www.postman.com/) or `curl` to interact with the API endpoints.

## Endpoints

The API provides the following endpoints for managing user data:

- **GET /:** Retrieve a list of all users.
- **GET /user/:id:** Retrieve user details by providing the user ID.
- **POST /user:** Create a new user by sending user data in the request body.
- **PUT /user/:id:** Update user details by providing the user ID and new data in the request body.
- **DELETE /user/:id:** Delete a user by providing the user ID.

## Dependencies

- [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.
- [Mongoose](https://mongoosejs.com/): An Object Data Modeling (ODM) library for MongoDB and Node.js.

