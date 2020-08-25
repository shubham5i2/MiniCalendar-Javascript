const http = require("http");
const fs = require("fs");

const htmlFile = fs.readFileSync("index.html");

const hostname = "127.0.0.1";
const port = 80;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(htmlFile);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
