    const { Thought, User } = require('../models');

    // Controller function to get all thoughts
    const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get thoughts.' });
    }
    };

    // Controller function to get a thought by ID
    const getThoughtById = async (req, res) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get thought.' });
    }
    };

    // Controller function to create a thought
    const createThought = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        const thought = await Thought.create(req.body);
        user.thoughts.push(thought._id);
        await user.save();
        res.status(201).json(thought);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create thought.' });
    }
    };

    // Controller function to update a thought
    const updateThought = async (req, res) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findByIdAndUpdate(thoughtId, req.body, { new: true });
        if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update thought.' });
    }
    };

    // Controller function to delete a thought
    const deleteThought = async (req, res) => {
    const { thoughtId } = req.params;
    try {
        const deletedThought = await Thought.findByIdAndDelete(thoughtId);
        if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
        }
        res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete thought.' });
    }
    };

    // Controller function to add a reaction to a thought
    const addReaction = async (req, res) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
        }
        thought.reactions.push(req.body);
        await thought.save();
        res.json(thought);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to add reaction.' });
    }
    };

    // Controller function to delete a reaction from a thought
    const deleteReaction = async (req, res) => {
    const { thoughtId, reactionId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
        }
        thought.reactions = thought.reactions.filter(reaction => reaction._id.toString() !== reactionId);
        await thought.save();
        res.json(thought);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete reaction.' });
    }
    };

    module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
    };
