import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAll() {
  return api.get('/api/manga');

}
// GET ALL ONSALE - SALE
function getAllSale(){
  return api.get('/api/manga/onSale');
}

// POST ADD MANGA
function post (data){
  const formData = prepareFormData(data)
  return api.post(
    '/api/manga',
    formData,
    formConfig
  )
}
// GET BY ID MANGA
function getById(id){
  return api.get('/api/manga/' + id)
}
function put(id, data, uploadedfile){

  const formData = prepareFormData(data, uploadedfile);
  return api.put(
    '/api/manga/' + id, 
    formData, 
    formConfig
  );
}
// DELETE - ProductDetail
function del(id) {
  return api.delete('/api/manga/' + id);
}


// [1] Form Config: sets the content header to form data
const formConfig ={
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

// [2] Form Data: format of mixed data when uploading files
function prepareFormData(data, uploadedfile){

  let formData = new FormData();

  // Append reconfigured mixed data to new object
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('author', data.author);
  formData.append('price', data.price);
  formData.append('page', data.page);
  formData.append('releaseDate', data.releaseDate);
  formData.append('onSale', data.onSale);
  formData.append('isAvailable', data.isAvailable);
  formData.append('image', data.image);
  if (uploadedfile) {
    formData.append('uploadedFile', uploadedfile);
  }

  return formData;

}


const productService = {
  getAll,
  post,
  getById,
  put,
  del,
  getAllSale
 
}

export default productService;