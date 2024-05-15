// This file defines the Mongoose schema and model for users
const { Schema, model } = require('mongoose');

// Define user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            
                    validator: function(v) {
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test;
                    },
                    
        }, 

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }, 
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: { virtuals: true },
        id: false,
    }
);

// Virtual for friend count
userSchema.virtual('friendCount').get(function() {
    return `${this.friends.length}`;
});

// Create User model
const User = model('User', userSchema);

module.exports = User;

