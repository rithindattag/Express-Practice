const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("../navbar-app/index.html");
const homeStyles = readFileSync("../navbar-app/styles.css");
const homeLogo = readFileSync("../navbar-app/logo.svg");
const homeBrowser = readFileSync("../navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  // CSS Styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  // Logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }

  // Browser JavaScript
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeBrowser);
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
