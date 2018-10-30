'use strict';

require('dotenv').config();
const express = require('express');
const math = require('mathjs');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Home page
app.get('/', (req, res) => {
  res.send(`Hello world\n (${process.env.NODE_ENV})`);
});

// Test api
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: `Hello world (${process.env.NODE_ENV})`
  };
  res.send(JSON.stringify(data, null, 2));
});

// Calculate result
app.get('/calc/:formula', (req, res) => {
  let result = null
  try {
    result = math.eval(req.params.formula);
  } catch (err) {
    console.log(err, err.stack);
  }
  res.set('Content-Type', 'application/json');
  let data = {
    message: result
  };
  res.send(JSON.stringify(data, null, 2));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
