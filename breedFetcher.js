const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, status, body) => {
    let desc = '';
    let data = JSON.parse(body)[0];
    if (data !== undefined) {
      desc = data['description'];
    }

    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };

// const fetch = (breed) => {
//   request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, status, body) => {
//     if (error) return console.log('!! Error Encountered: ', error);
//     let data = JSON.parse(body)[0];

//     if (data === undefined) {
//       console.log('🚫🐈 Breed not found: please input a correct breed name');
//     } else {
//       console.log(data['description']);
//     }
//   });
// };