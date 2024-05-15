// This file defines the main router for the application
const router = require('express').Router();
const apiRoutes = require('./api');
// Mount API routes
router.use('/api', apiRoutes);
// Catch-all route for handling incorrect routes
router.use((req, res) => {
    return res.send('Wrong route!');
    });

module.exports = router;
