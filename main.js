// import node modules express and http, and initialise expressjs and http server
const express = require('express'),
  app = express(),
  port = 3000,
  server = require('http').createServer(app),
  appState = {},
  // function addTwoNumber: add two numbers
  // @params n1, n2: integer
  // @return integer
  addTwoNumber = (n1, n2) => {
    return n1 + n2;
  };

// configure route for path / to accept GET requests
app.get('/', function (req, res) {

  // respond to client with a heading HTML element
  res.send('<h1>Hello World</h1><p>[ryanlee@deakin.edu.au]</p>');

  // log server, client and resource information to console 
  console.log(`[${appState.serverInfo}] from ${req.ip} '${req.method} ${req.originalUrl}'`);
})

//configure route for path /addTwoNumber to accept GET requests
app.get('/addTwoNumber', function (req, res) {

  // parse url params and get the sum
  const n1 = parseInt(req.query.n1),
    n2 = parseInt(req.query.n2);
  let result = addTwoNumber(n1, n2);

  // respond to client with result formatted as JSON
  res.json({ statuscode: 200, data: { n1: n1, n2: n2, result: result } });

  // log server, client and resource information to console 
  console.log(`[${appState.serverInfo}] from ${req.ip} '${req.method} ${req.originalUrl}'`);
})

// start http server on port 3000
server.listen(port, () => {
  // set serverInfo for logging
  appState.serverInfo = `ipaddr=${server.address().address} port=${server.address().port}`;
  // log testing URL to console
  console.log(`[${appState.serverInfo}] started: http://localhost:${server.address().port}`);
});