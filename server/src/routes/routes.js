// CENTRAL ROUTE FILE
// Import express and router
const express = require('express'); 
const router = express.Router();

// Import sub-routes
const authRoutes = require('./authRoutes');

module.exports = () => {
  // Test GET Route
  router.get('/', (req, res, next) => {
    res.send('Welcome to the Timbertop United API');
  });

  // Sub-Routes
  router.use('/auth', authRoutes());

  return router
}