// Importing the Mongoose library
const { connect, connection }= require('mongoose');



// // Connecting to the MongoDB database named "social-network"
connect('mongodb://localhost/social-network');

// Exporting the Mongoose connection object for use in other parts of the application
module.exports = connection;
