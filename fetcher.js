const request = require("request");
const fs = require("fs");
const [url, homePath] = process.argv.slice(2);

function wr(path, content) {
  fs.writeFile(path, content, { flag: "a+" }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      `Downloaded and saved ${content.length} files bytes to ${path}.`
    );
  });
}
request(url, (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  wr(homePath, body);
});
