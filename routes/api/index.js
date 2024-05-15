const router = require('express').Router();
    const userRoutes = require('./userRoutes');
    const thoughtRoutes = require('./thoughtRoutes');
    // const reactionRoutes = require('./api-routes/reactionRoutes');

    // Define main API routes

    // Route for user-related endpoints
    router.use('/users',userRoutes);

    // Route for thought-related endpoints
    router.use('/thoughts',thoughtRoutes);

    

    module.exports = router;
