    // Importing required modules
    const mongoose = require('mongoose');
    const { reactionSchema } = require('./Reaction');

    // Defining the schema for a thought
    const thoughtSchema = new mongoose.Schema({
    // Text of the thought
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    // Creation timestamp of the thought
    createdAt: {
        type: Date,
        default: Date.now,
        // Custom getter function for formatting the timestamp
        get: timestamp => dateFormat(timestamp)
    },
    // Username of the author of the thought
    username: {
        type: String,
        required: true
    },
    // Array of reactions associated with the thought
    reactions: [reactionSchema]
    });

    // Virtual property to calculate the reaction count
    thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
    });

    // Creating Mongoose model for the Thought schema
    const Thought = mongoose.model('Thought', thoughtSchema);

    // Exporting the Thought model
    module.exports = Thought;

