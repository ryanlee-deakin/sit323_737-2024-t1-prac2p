const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World -- from Lee [ryanlee@deakin.edu.au]');
})

app.listen(3000);