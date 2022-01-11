const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  })
})

const host = 'localhost';
const port = 3000
app.listen(port, host, () => {
  console.log(`server running at ${host}:${port}`);
})
