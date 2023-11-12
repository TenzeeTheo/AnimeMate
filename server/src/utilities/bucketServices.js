// Import in modules
const { bucket } = require('../config/db');
const debugBucket = require('debug')('app:bucket');
const uuid = require('uuid');
const fs = require('fs');

module.exports = {

  async storageBucketUpload(filename) {

    // 1. GENERATE RANDOM UUID STORAGE TOKEN 
    debugBucket(`Firestore File Name: ${filename}`);
    const storageToken = uuid.v4();

    // 2. DECLARE FILEPATH & OPTIONS PARAMETER VARIABLES FOR CUSTOM BUCKET UPLOAD
    const serverFilePath = `./public/uploads/${filename}`;
    const options = {
      destination: filename,
      resumable: true,
      validation: 'crc32c',
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: storageToken 
        },
      }
    };

    // OPTIONAL DEBUGGING: Checks if server-side /uploads file exists before BUCKET UPLOAD
    fs.access(serverFilePath, fs.F_OK, (err) => {
      if (err) {
        debugBucket(err);
        return({
          message: 'Error occurred in storing file to server'
        });
      } else {
        debugBucket("File Successfully Stored in Server");
      }
    });

    // 3. CLOUD FIRESTORE UPLOAD METHOD CALL
      const result = await bucket.upload(serverFilePath, options);
      const bucketName = result[0].metadata.bucket;
      debugBucket(`Bucket Name: ${bucketName}`);

    // 4. CONSTRUCT DOWNLOAD URL
    const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
    console.log(`File Successfully Uploaded to Storage Bucket: ${downloadURL}`)

    // 5. DELETE TEMPORARY FILE IN SERVER-SIDE UPLOADS
    fs.unlink(serverFilePath, err => {
      if(err) {
        debugBucket(err);
        return({
          message: 'Error occurred in removing file from temporary local storage'
        });
      } else {
        debugBucket('File in temporary local storage deleted');
      }
    });


    return downloadURL;
  },
  async deleteFileFromBucket(uploadedFile) {
    const file = bucket.file(uploadedFile);
    const fileChecker = await file.exists();
    // 400 Error
    if (fileChecker[0] === false) {
      const options={
        ignoreNotFound: true,
      };
      const data = await file.delete(options);
      debugBucket(`The file: ${uploadedFile}, does not exist in Storage.  Please check server for inconsistent data handling & database queries.`);
        return data[0];
        // if the File exist
    } else {
      const data = await file.delete();
      console.log(`File deleted from Storage Bucket: ${uploadedFile}`);

      return data[0];
      
    }


  }
}