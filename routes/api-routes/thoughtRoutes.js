    const router = require('express').Router();
    const {
        getAllThoughts,
        getThoughtById,
        createThought,
        updateThought,
        deleteThought,
        addReaction,
        deleteReaction
    } = require('../../controllers/thoughtController');

    // Set up GET all and POST requests for /api/thoughts
    router.route('/').get(getAllThoughts).post(createThought);

    // Set up GET one, PUT, and DELETE requests for /api/thoughts/:id
    router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

    router.route('/:thoughtId/reactions') .post(addReaction).delete(deleteReaction);

    module.exports = router;