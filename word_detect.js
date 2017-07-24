var csv = require("./csv"),
    fs = require("fs"),
    path = require("path");
var returnObj = {};
var stream = fs.createReadStream(path.resolve("./assets", "test.csv"))
    .pipe(csv.parse())
    .on("data", function (data) {
            if(returnObj[data[0]]) {
              returnObj[data[0]] = returnObj[data[0]] + 1;
            }
            else {
              returnObj[data[0]] = 1
            }

    })
    .on("end", function() {
      console.log(returnObj)
      process.exit;
    });
