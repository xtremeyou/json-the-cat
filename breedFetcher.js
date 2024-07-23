const needle = require("needle");
const args = process.argv.slice(2);
const url = args[0];
const urlLink = "https://api.thecatapi.com/v1/breeds/search?q=";
const specificPet = url;

//need to somehow change the end of the url to a variable that gets tied to my arg url
needle.get(urlLink + specificPet, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    let firstEntry = body.map(({ description }) => description);
    console.log(firstEntry);
  } else {
    console.log("error:", error); // Print the error if one occurred
  }
});
