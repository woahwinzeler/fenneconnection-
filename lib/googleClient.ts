
const bucketName = 'content-1';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

export default async function listFilesPaginated() {
  const bucket = storage.bucket(bucketName);
  const [files, queryForPage2] = await bucket.getFiles({autoPaginate: false});

  console.log('Files:');
  files.forEach(file => {
    console.log(file.name);
  });

  // Page through the next set of results using "queryForPage2"
  if (queryForPage2 !== null) {
    const [files, queryForPage3] = await bucket.getFiles(queryForPage2);

    console.log('Files:');
    files.forEach(file => {
      console.log(file.name);
    });

    // If necessary, continue cursoring using "queryForPage3"
  }
}
