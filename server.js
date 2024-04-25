// Import required modules
const express = require('express');
const connection = require('./config/connection'); // Import MongoDB connection
const routes = require('./routes'); // Import route definitions

const app = express(); // Create Express application
const PORT = process.env.PORT || 3001; // Define port

// Middleware to parse incoming JSON data
app.use(express.json());
// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define routes with base URL prefix '/api'
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack trace
  res.status(500).send('Something went wrong!'); // Send 500 status and error message
});

// Establish MongoDB database connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully'); // Log successful database connection
  // Start server on specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server running message
    });
});
