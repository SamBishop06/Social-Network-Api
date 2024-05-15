    // This file defines the Mongoose schema for reactions
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    // Define reaction schema
    const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280,
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
    },
    
    });

    module.exports = { reactionSchema };
