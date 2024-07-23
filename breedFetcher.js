const needle = require("needle");

//
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.t/hecatapi.com/v1/breeds/search?q=${breedName}`
  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return
    }

    const data = body[0];
    if (!data) {
      callback("Cat not found", null)
      return
    }

    const breedDesc = data.description;
    callback(null, breedDesc);
  });
}
module.exports = { fetchBreedDescription };
