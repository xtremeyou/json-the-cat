const needle = require("needle");
const args = process.argv
const url = args[2];
const urlLink = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  needle.get(urlLink + url, (error, response, body) => {
    if (!error && response) {
      let firstEntry = body.map(({ description }) => description);
      callback(null, firstEntry);
    } else {
        callback(error, null)
    }
  });
};

module.exports = { fetchBreedDescription };