# Push-Notification-System

## Project Overview

This Node.js application provides a simple push notification system with the ability to generate unique codes for accepted notifications. It utilizes Express.js for the server, MongoDB for data storage, and the uuid library to generate unique codes.

## Task Description

The main tasks and features of this project are as follows:

1. **Acceptance of Notifications:** Users can accept a notification, which triggers the generation of a unique code.

2. **Declination of Notifications:** Users can decline a notification, with no further action required.

3. **Unique Code Generation:** Upon accepting a notification, a unique code is generated for reference or confirmation.

## Prerequisites

Before running this application, ensure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure your MongoDB server is up and running)

## Backend Development

The backend of this project is developed using Node.js and Express.js. Key backend components include:

- **Express.js Server:** The server is built with Express.js, a popular Node.js web application framework.

- **MongoDB Database:** MongoDB is used as the database to store user information, notification data, and user preferences.

- **MVC Architecture:** The backend follows the Model-View-Controller (MVC) architectural pattern for organization and maintainability

## Project Structure

The project is structured as follows:

- `server.js`: The main server file that handles server setup and API routing.

- `routes/`

  - `notificationRoutes.js`: Notification-related API routes and controllers.

- `controllers/`

  - `notificationController.js`: Controllers for notification-related operations.

- `services/`

  - `notificationService.js`: Notification-related business logic and database operations.

- `models/`

  - `notification.js`: Notification data model.

- `schemas/`
  - `notificationSchema.js`: Validation schemas for notification data.

## Getting Started

To get started with the Push-Notification-System Project on your local development environment, you'll need to follow these steps:

1. **Clone the Repository**

   First, clone the project repository to your local machine. Open your terminal or command prompt and run the following command:

   ```bash
   git clone <https://github.com/priyankarajputttt/Push-Notification-System>
   ```

2. **Install Dependencies**

   Navigate to the project directory:

   ```bash
   cd  Push-Notification-System
   ```

   Next, install the project dependencies using npm (Node Package Manager). Run the following command:

   ```bash
   npm install
   ```

   This will download and install all the required packages and modules specified in the `package.json` file.

3. **Configure MongoDB**

   The project relies on MongoDB as its database. You'll need to set up a MongoDB database and configure the connection URL in the project.

   - If you don't have MongoDB installed locally, you can install it by following the instructions on the [MongoDB website](https://docs.mongodb.com/manual/installation/).

   - Once MongoDB is installed, you can create a new database and obtain the connection URL.

   - Update the MongoDB connection URL in the `server.js` file in your project directory. Look for the following line and replace it with your database URL:

     ```javascript
     mongoose.connect(
       "mongodb+srv://pr639490:3dSTuRMDli2yTY8i@cluster0.j1qiuv0.mongodb.net/",
       { useNewUrlParser: true, useUnifiedTopology: true }
     );
     ```

4. **Start the Server**

   After configuring the database, you can start the server by running the following command:

   ```bash
   npm run dev
   ```

   This command will start the Node.js server, and you should see a message indicating that the server is running on a specific port (e.g., `Server is running on port 3000`).

5. **Testing the API**

   Your server should now be up and running. You can use Postman or any other API testing tool to interact with the API endpoints provided by the project.

   Notification Management:

Respond to the notification:
POST----/api/notifications/respond-notification

These steps should help you set up and run the Push-Notification-System Project on your local machine for development and testing purposes.
