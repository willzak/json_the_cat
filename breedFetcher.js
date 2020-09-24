const request = require('request');
let breed = process.argv.slice(2)[0];

const fetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, status, body) => {
    if (error) return console.log('!! Error Encountered: ', error);
    let data = JSON.parse(body)[0];

    if (data === undefined) {
      console.log('🚫🐈 Breed not found: please input a correct breed name');
    } else {
      console.log(data['description']);
    }
  });
};

fetch(breed);