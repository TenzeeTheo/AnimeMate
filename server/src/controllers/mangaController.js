const { db } = require('../config/db');
const ApiError = require('../utilities/ApiError');


module.exports ={
    async getAllManga (req, res, next){
        try {
            const mangaRef = db.collection('Manga');
            const snapshot = await mangaRef.get();
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

    }




}
