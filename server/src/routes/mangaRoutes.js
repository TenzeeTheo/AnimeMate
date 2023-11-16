// Import express and router
const express = require('express'); 
const router = express.Router();


const ProductPolicy = require('../policies/productPolicy');
const FilePolicy = require('../policies/filePolicy');
const VerifyAuth = require('../middleware/verifyAuth');
const fileServerUpload = require('../middleware/fileServerUpload');
const MangaController = require('../controllers/mangaController')


module.exports = () => {

  // GET ALL Products
   router.get('/', 
   MangaController.getAllManga
 );
  // GET onSALE Manga
  router.get('/onSale', 
  MangaController.getOnSaleManga
  );
   // POST Product
   router.post('/', 
  [  VerifyAuth.auth,
   ProductPolicy.validateProduct,
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
  [  VerifyAuth.auth,
   ProductPolicy.validateProduct,
   FilePolicy.filesPayloadExists,
   FilePolicy.fileSizeLimiter,
   FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
   fileServerUpload],
   MangaController.putMangaById
 );
  // DELETE BY ID Manga
  router.delete('/:id',
 [ VerifyAuth.auth,
  VerifyAuth.admin],
   MangaController.deleteMangaById);


return router
}