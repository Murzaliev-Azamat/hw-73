const express = require('express');
const app = express();
const port = 8000;

app.get('/:something', (req, res) => {
  res.send(req.params.something);
});

const Vigenere = require('caesar-salad').Vigenere;

app.get('/encode/:something', (req, res) => {
  const message = Vigenere.Cipher('password').crypt(req.params.something);
  res.send(message);
});

app.get('/decode/:something', (req, res) => {
  const message = Vigenere.Decipher('password').crypt(req.params.something);
  res.send(message);
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});