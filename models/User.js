
    const mongoose = require('mongoose');
    const { reactionSchema } = require('./Reaction');

    // Define user schema
    const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
    });

    // Virtual for friend count
    userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
    });

    // Create User model
    const User = mongoose.model('User', userSchema);

    module.exports = User;
