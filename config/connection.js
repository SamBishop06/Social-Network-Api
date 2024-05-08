// Importing the Mongoose library
const mongoose = require('mongoose');

// Connecting to the MongoDB database named "social-network"
mongoose.connect('mongodb://localhost/social-network', {
    // Using the new URL parser
    useNewUrlParser: true,
    // Using the new Server Discovery and Monitoring engine
    useUnifiedTopology: true,
    // Ensuring that Mongoose uses createIndex() instead of ensureIndex() for index creation
    useCreateIndex: true,
    // Ensuring that Mongoose uses findOneAndUpdate() and findOneAndDelete() rather than findAndModify()
    // useFindAndModify: false
});

// Exporting the Mongoose connection object for use in other parts of the application
module.exports = mongoose.connection;
