let input = process.argv.slice(2);

const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  if (error !== null) {
    console.log("there was an error with the program");
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});