    const router = require('express').Router();
    const userRoutes = require('./api-routes/userRoutes');
    const thoughtRoutes = require('./api-routes/thoughtRoutes');
    const reactionRoutes = require('./api-routes/reactionRoutes');

    // Define main API routes

    // Route for user-related endpoints
    router.use('/users', userRoutes);

    // Route for thought-related endpoints
    router.use('/thoughts', thoughtRoutes);

    // Route for reaction-related endpoints
    router.use('/reactions', reactionRoutes);

    module.exports = router;
