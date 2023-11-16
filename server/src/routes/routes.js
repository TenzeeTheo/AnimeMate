// CENTRAL ROUTE FILE

// Import express and router
const express = require('express'); 
const router = express.Router();

// Import sub-routes
const authRoutes = require('./authRoutes');
const mangaRoutes = require('./mangaRoutes');



module.exports = () => {
  // Test GET Route
  router.get('/', (req, res, next) => {
    res.send('Welcome to the Anime Mate');
  });

  // Sub-Routes
  router.use('/auth', authRoutes());

  router.use('/manga', mangaRoutes());

  return router
}