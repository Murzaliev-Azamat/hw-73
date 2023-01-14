const express = require('express');
const app = express();
const port = 8000;

app.get('/:something', (req, res) => {
  res.send(req.params.something);
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});