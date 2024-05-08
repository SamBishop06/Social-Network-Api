    const mongoose = require('mongoose');

    // Define reaction schema
    const reactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Custom getter for date formatting
        get: timestamp => dateFormat(timestamp)
    }
    });

    module.exports = { reactionSchema };
