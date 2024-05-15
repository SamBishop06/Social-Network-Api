const { User, Thought } = require('../models');

// Controller function to get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to find users.' });
    }
};

// Controller function to get a user by ID
const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId).populate('thoughts').populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to find user.' });
    }
};

// Controller function to create a user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create user.' });
    }
};

// Controller function to update a user
const updateUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create user.' });
    }
};

// Controller function to delete a user
const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Bonus: Remove associated thoughts
        await Thought.deleteMany({ _id: { $in: deletedUser.thoughts } });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete user.' });
    }
};

// Controller function to add a friend for a user
const addFriend = async (req, res) => {
    const { userId, friendId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.friends.includes(friendId)) {
            return res.status(400).json({ message: 'User is already a friend' });
        }
        user.friends.push(friendId);
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to add friend.' });
    }
};

// Controller function to delete a friend for a user
const deleteFriend = async (req, res) => {
    const { userId, friendId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!user.friends.includes(friendId)) {
            return res.status(400).json({ message: 'User is not a friend' });
        }
        user.friends = user.friends.filter(friend => friend.toString() !== friendId);
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete friend.' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
};
