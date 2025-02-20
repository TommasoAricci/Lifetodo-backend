[RUN THE APP](https://lifetodo-my.netlify.app/)

# Lifetodo (Backend)

Lifetodo is a personal **productivity app** that helps you organize your daily thoughts by creating notes, todo lists, and favorite songs and books lists.

## Tech Stack

### **Backend Platform**
- Node.js

### **Libraries**
- Express
- Mongoose
- Dotenv
- Nodemon
- Bcrypt
- Cors
- Jsonwebtoken

### **Database**
- MongoDB Atlas

## Project Structure

```
Lifetodo/
├── src/
│   ├── schemas/        # Mongoose schema models for defining collections
│   ├── controllers/    # Business logic for handling requests
│   ├── routes/         # API endpoint definitions
│   ├── middleware/     # Custom middlewares for authentication & validation
│── app.js               # Initializes the application and starts the server
│── database.js          # Configures the database connection
```

## API Methods

Lifetodo provides a REST API with the following methods:

- **`POST`** → Create new users, notes, to-do lists, songs, and books.
- **`PUT`** → Update existing records in the database.
- **`DELETE`** → Remove records from the database.
- **`GET`** → Retrieve stored records from the database.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Server

To start the development server with **nodemon**:

```bash
npx nodemon app.js
```
## Deploy

The backend repository is deployed on [Render](https://render.com), and the **environment variables** are configured directly on the platform.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
