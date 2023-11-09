// Import express and router
const express = require('express'); 
const router = express.Router();


const ProductPolicy = require('../policies/productPolicy');
const FilePolicy = require('../policies/filePolicy');
const fileServerUpload = require('../middleware/fileServerUpload');
const MangaController = require('../controllers/mangaController')


module.exports = () => {

  // GET ALL Products
   router.get('/', 
   MangaController.getAllManga
 );

  // // GET onSALE Products
  // router.get('/onsale', 
  //   ProductController.getOnSaleProducts
  // );

   // POST Product
   router.post('/', 
  [ ProductPolicy.validateProduct,
   FilePolicy.filesPayloadExists,
   FilePolicy.fileSizeLimiter,
   FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
   fileServerUpload],
   MangaController.postManga
 );

  // GET BY ID Manga
  router.get('/:id',
    MangaController.getMangaById
  );

  // GET UPDATE BY ID
  router.put('/:id', 
  [ ProductPolicy.validateProduct,
   FilePolicy.filesPayloadExists,
   FilePolicy.fileSizeLimiter,
   FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
   fileServerUpload],
   MangaController.putMangaById
 );

  
    return router
  }