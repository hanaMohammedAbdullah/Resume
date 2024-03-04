const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, html) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
