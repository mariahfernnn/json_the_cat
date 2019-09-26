const request = require('request');
let args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length < 1) {
      console.log('Not a cat!');
    } else {
      console.log(data[0].description);
    }
  }
});


