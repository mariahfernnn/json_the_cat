const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, response);
    } else {
      const data = JSON.parse(body);
      if (data.length < 1) {
        callback(null, 'Not a cat!');
      } else {
        callback(null, data[0].description.trim());
      }
    }
  });
};

module.exports = { fetchBreedDescription };
