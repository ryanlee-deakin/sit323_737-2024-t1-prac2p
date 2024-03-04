// import node modules express and http, and initialise expressjs and http server
const express = require('express'),
    app = express(),
    port = 3000,
    server = require('http').createServer(app),
    settings = {};

// configure route for path / to accept GET requests
app.get('/', function (req, res) {
  // trigger response to client with a heading HTML element
  res.send('<h1>Hello World</h1><p>[ryanlee@deakin.edu.au]</p>');
  // log server, client and resource information to console 
  console.log(`[${settings.serverInfo}] from ${req.ip} '${req.method} ${req.originalUrl}'`);
})

// start http server on port 3000
server.listen(port, () => {
  // set serverInfo for logging
  settings.serverInfo = `ipaddr=${server.address().address} port=${server.address().port}`;
  // log testing URL to console
  console.log(`[${settings.serverInfo}] started: http://localhost:${server.address().port}`);
});