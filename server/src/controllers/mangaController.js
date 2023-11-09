const { db } = require('../config/db');
const ApiError = require('../utilities/ApiError');
const { storageBucketUpload } = require('../utilities/bucketServices');

const debugREAD = require('debug')('app:read');
const debugWRITE = require('debug')('app:write');


module.exports ={
    async getAllManga (req, res, next){
        try {
            const mangaRef = db.collection('Manga');
            // const snapshot = await mangaRef.where("isAvailable", "==", "true").orderBy("name", "asc").get();
            const snapshot = await mangaRef.orderBy("name").get();

        // [400 ERROR] Check for User Asking for Non-Existent Documents
        if (snapshot.empty) {
            return next(ApiError.badRequest('The items you were looking for do not exist'));
        }
        // SUCCESS: Push object properties to array and send to client
        let docs = [];
        snapshot.forEach(doc => {
            docs.push({
                id: doc.id,
                name: doc.data().name,
                author: doc.data().author,
                description: doc.data().description,
                price: doc.data().price,
                page: doc.data().page,
                onSale: doc.data().onSale,
                isAvailable: doc.data().isAvailable,
                image: doc.data().image,
                releaseDate: doc.data().releaseDate,
            });
        });
        res.send(docs);
            
        } catch (err) {
            return next(ApiError.internal('The Product have gone missing ~Sorry!',err))
            
        }

    },
    async postManga(req,res, next){

        debugWRITE(req.body)
        debugWRITE(req.files)
        debugWRITE(res.locals)

    // SAVE TO CLOUDE STORAGE(FILE)
    let downloadURL = null;
    try {
        const filename = res.locals.filename;
        downloadURL = await storageBucketUpload(filename);
        
    } catch (err) {
        return next(ApiError.internal('An error occurred in uploading the image to storage', err));
    }


    // SAVE TO FIRESTORE (ALL DATA)
        try {
            const mangaRef = db.collection('Manga');
            const response = await mangaRef.add({

                name: req.body.name,
                description: req.body.description,
                author: req.body.author,
                price: Number(req.body.price),
                page: Number(req.body.page),
                releaseDate: Date (req.body.releaseDate),
                onSale: req.body.onSale,
                isAvailable: req.body.isAvailable,
                image: downloadURL
            })
        console.log(`Added Product ID: ${response.id}`)
        res.send(response.id);



            
        } catch (err) {
            return next(ApiError.internal('The items selected could not be found', err));
            
        }
    },
    async getMangaById(req,res, next){
        debugREAD(req.params);
        try {
        // Store the document query in variable & call GET method for ID
            const mangaRef = db.collection('Manga').doc(req.params.id);
            const doc = await mangaRef.get();

        // [400 ERROR] Check for User Asking for Non-Existent Documents
        if (!doc.exists) {
        return next(ApiError.badRequest('The manga you were looking for does not exist'));

         // SUCCESS: Send back the specific document's data
      } else {
        res.send(doc.data());
      }
            
        } catch (error) {

        return next(ApiError.internal('Your request could not be processed at this time', err));
        }
    },
    async putMangaById(req, res, next){
        debugWRITE(req.body);
        debugWRITE(req.files);
        debugREAD(req.params.id);
        debugWRITE(res.locals);
     // SAVE TO CLOUDE STORAGE(FILE)
    let downloadURL = null;
    try {
        if(req.files){
        // (i) Storage-Upload
            const filename = res.locals.filename;
            downloadURL = await storageBucketUpload(filename);

            // (ii) Delete OLD image version in Storage Bucket, if it exists


            // (iii) IMAGE NOT CHANGED: We just pass back the current downloadURL and pass that back to the database, unchanged!
        }else{
            console.log('No change')
            downloadURL = req.body.image


        }
    
        
    } catch (err) {
        return next(ApiError.internal('An error occurred in uploading the image to storage', err));
    }


    // SAVE TO FIRESTORE (ALL DATA)
        try {
            const mangaRef = db.collection('Manga').doc(req.params.id);
            const response = await mangaRef.update({
                name: req.body.name,
                description: req.body.description,
                author: req.body.author,
                price: Number(req.body.price),
                page: Number(req.body.page),
                releaseDate: Date (req.body.releaseDate),
                onSale: req.body.onSale,
                isAvailable: req.body.isAvailable,
                image: downloadURL
            })
        res.send(response.id);



            
        } catch (err) {
            return next(ApiError.internal('The items selected could not be found', err));
            
        }

    }




}
