const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello Yadav Siwakoti this is web app azure");
});

const port = process.env.PORT || 1311;
server.listen(port);
console.log("Server is srunning");
