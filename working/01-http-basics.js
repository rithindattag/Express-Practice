const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }

  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }

  // Page not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found!</h1>");
    res.end();
  }
});
server.listen(5000);
