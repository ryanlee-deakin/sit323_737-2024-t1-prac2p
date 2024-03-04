const express = require('express');
const app = express();
let port = 3000,
    server = require('http').createServer(app);

app.get('/', function (req, res) {
  console.log(`[server] ${req.method} ${req.originalUrl}`);
  res.send('Hello World -- from Lee [ryanlee@deakin.edu.au]');
})

server.listen(port, () => {
  console.log(`[server] listening on http://localhost:${server.address().port}`);
});