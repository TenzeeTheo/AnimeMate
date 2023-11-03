import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAll() {
  return api.get('/api/manga');

}
// GET ALL ONSALE - ProductSale


const productService = {
  getAll,
 
}

export default productService;