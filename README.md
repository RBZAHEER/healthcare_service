## Healthcare Services API

This is a simple API to manage healthcare services using Node.js, Express, and MongoDB. The API allows you to perform CRUD (Create, Read, Update, Delete) operations for healthcare services such as adding, updating, retrieving, and deleting services.

### Prerequisites

Before starting the project, ensure you have the following installed on your machine:

- **Node.js** (version >= 14.x) [Download Node.js here](https://nodejs.org/en/download/)
- **MongoDB** (You can either run a local instance of MongoDB or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud MongoDB)
- **Postman** (Optional, for testing) [Download Postman here](https://www.postman.com/downloads/)

### Steps to Set Up and Run the Project

#### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/RBZAHEER/healthcare_service.git
```

Change into the project directory:

```bash
cd healthcare_service
```

#### 2. Install Project Dependencies

Use npm to install all the required Node.js packages:

```bash
npm install
```

#### 3. Set Up MongoDB

If you are using a **local MongoDB instance**:

1. Start MongoDB locally on your machine (ensure it's running at the default port `27017`).
2. Use the following connection string in your `.env` file:
   ```bash
   MONGO_URI=mongodb://localhost:27017/healthcare
   ```

If you are using **MongoDB Atlas (cloud)**:

1. Create a MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Get the connection string from your cluster dashboard, replace `<username>`, `<password>`, and `<your-database>` with your own credentials, and add it to your `.env` file:
   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-database>?retryWrites=true&w=majority
   ```

#### 4. Create the `.env` File

In the root of your project folder, create a `.env` file:

```bash
touch .env
```

In the `.env` file, add the following environment variables:

```bash
PORT=3000
MONGO_URI=your-mongo-uri-here
```

Replace `your-mongo-uri-here` with the actual MongoDB connection string.

#### 5. Start the Application

To start the application, run:

```bash
node app.js
```

The server will start at `http://localhost:3000`. You should see a message like:

```
Server running on http://localhost:3000
Connected to MongoDB...
```

### Testing the API

You can test the API using Postman or any other API testing tool. The API has the following endpoints:

---

#### 1. **Add a New Service**

- **URL**: `http://localhost:3000/api/services/add`
- **Method**: `POST`
- **Body (JSON)**:

  ```json
  {
    "name": "Physiotherapy",
    "description": "A comprehensive physiotherapy session for muscle and joint pain.",
    "price": 150
  }
  ```

- **Response Example**:
  ```json
  {
    "_id": "64ef5c124823a70b4e7d50f2",
    "name": "Physiotherapy",
    "description": "A comprehensive physiotherapy session for muscle and joint pain.",
    "price": 150,
    "__v": 0
  }
  ```

---

#### 2. **Get All Services**

- **URL**: `http://localhost:3000/api/services`
- **Method**: `GET`

- **Response Example**:
  ```json
  [
    {
      "_id": "64ef5c124823a70b4e7d50f2",
      "name": "Physiotherapy",
      "description": "A comprehensive physiotherapy session for muscle and joint pain.",
      "price": 150,
      "__v": 0
    },
    {
      "_id": "64ef5c124823a70b4e7d50f3",
      "name": "Dental Cleaning",
      "description": "A comprehensive dental cleaning service that includes tartar removal and teeth polishing.",
      "price": 120,
      "__v": 0
    }
  ]
  ```

---

#### 3. **Update a Service**

- **URL**: `http://localhost:3000/api/services/update/:id`
  - Replace `:id` with the actual service ID.
- **Method**: `PUT`
- **Body (JSON)**:

  ```json
  {
    "name": "Dental Cleaning (Updated)",
    "description": "An updated dental cleaning service that includes tartar removal and teeth polishing.",
    "price": 130
  }
  ```

- **Response Example**:
  ```json
  {
    "_id": "64ef5c124823a70b4e7d50f3",
    "name": "Dental Cleaning (Updated)",
    "description": "An updated dental cleaning service that includes tartar removal and teeth polishing.",
    "price": 130,
    "__v": 0
  }
  ```

---

#### 4. **Delete a Service**

- **URL**: `http://localhost:3000/api/services/delete/:id`
  - Replace `:id` with the actual service ID.
- **Method**: `DELETE`

- **Response Example**:
  ```json
  {
    "message": "Service deleted successfully"
  }
  ```

---

### Folder Structure

```
healthcare-api/
├── models/
│   └── serviceModel.js           # MongoDB schema and model for services
├── routes/
│   └── serviceRoutes.js          # API routes for healthcare services
├── .env                          # Environment variables
├── app.js                        # Entry point of the application
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation (this file)
```

### Additional Notes

- Ensure that MongoDB is running before you start the server.
- If you face any issues while setting up or running the project, verify that your `.env` file is correctly configured with the right MongoDB connection string.
- You can use Postman to test all endpoints and monitor responses.

### Optional: Testing with Postman

You can create a Postman collection for testing the API. Here’s how you can test the API with Postman:

1. Open Postman.
2. Create a new request for each endpoint (`POST`, `GET`, `PUT`, and `DELETE`).
3. For `POST` and `PUT`, use the **Body** tab to send JSON data.
4. Hit **Send** and observe the response.

---
