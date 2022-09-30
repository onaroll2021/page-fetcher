// take two commands, URL and local file path
// desired result: Downloaded and saved 1235 bytes to ./index.html.
const request = require('request');
const fs = require('fs');
request(`${process.argv[2]}`, (error, response, body) => {
  if(error) {
    console.log('error:', error)
  };
  fs.writeFile(`${process.argv[3]}`, body, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Downloaded and saved ${response.headers[`content-length`]} to ${process.argv[3]}`)
      }
    });
});
