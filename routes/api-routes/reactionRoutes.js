    const router = require('express').Router();
    const { addReaction, deleteReaction } = require('../../controllers/reactionController');

    // Routes for reactions

    // Route to add a reaction
    router.route('/').post(addReaction);

    // Route to delete a reaction by ID
    router.route('/:reactionId').delete(deleteReaction);

    module.exports = router;





