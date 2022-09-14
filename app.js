const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    `
    <h1 style='text-align:center;margin-top:40vh;font-size:48px;'>
      Node.js
    </h1>
    `
  );
});

app.listen(port, () => {
  console.log('App listening on port 3000...');
});