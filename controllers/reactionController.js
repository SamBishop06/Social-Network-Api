    // Import the Thought model
    const { Thought } = require('../models');



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

    // Export the controller functions
    module.exports = {
    addReaction,
    deleteReaction
    };
