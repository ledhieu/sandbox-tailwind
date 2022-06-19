// const request = require('request')
const fs = require("fs");
const https = require("https");
const url =
  "https://jsonbox.io/box_28a26747983acfdb501b/5d9dee93e6f3c60017ce16f5";

// request({
//   url: url,
//   json: true
// }, function (error, response, body) {
//   if (!error && response.statusCode === 200) {
//     console.log(body) // Print the json response

//     fs.writeFile('test.json', JSON.stringify(body, null, '  '), (err) => {
//       if (err) throw err
//       console.log('json saved!')
//     })
//   }
// })

// https
//   .get(url, resp => {
//     let data = "";
//     // console.log(resp)
//     // A chunk of data has been recieved.
//     resp.on("data", chunk => {
//       data += chunk;
//     });
//     // The whole response has been received. Print out the result.
//     resp.on("end", () => {
//       console.log(data);
//       const dataToWrite = JSON.parse(JSON.stringify(data, null, "  "));
//       fs.writeFile("test.json", dataToWrite, err => {
//         if (err) throw err;
//         console.log("json saved!");
//       });
//     });
//   })
//   .on("error", err => {
//     console.log("Error: " + err.message);
//   });
