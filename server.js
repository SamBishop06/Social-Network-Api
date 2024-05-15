// Import required modules
const express = require('express');
const db = require('./config/connection'); // Import MongoDB connection
const routes = require('./routes'); // Import route definitions

const app = express(); // Create Express application
const PORT = process.env.PORT = 3001; // Define port

// Middleware to parse incoming JSON data
app.use(express.json());
// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// Establish MongoDB database connection
db.once('open', () => {
  console.log('Api Social Network running on port'); // Log successful database connection
  // Start server on specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server running message
    });
});
