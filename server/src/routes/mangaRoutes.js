// Import express and router
const express = require('express'); 
const router = express.Router();

const MangaController = require('../controllers/mangaController')


module.exports = () => {
   // GET ALL Products
   router.get('/', 
   MangaController.getAllManga
 );
  
    return router
  }