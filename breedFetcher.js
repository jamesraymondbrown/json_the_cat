const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      error = ("can't find that breed");
    }
    if (error !== null) {
      callback(error, null);
    } else {
      const desc = data[0].description;
      callback(null, desc);
    }
   
  });
};

module.exports = { fetchBreedDescription };