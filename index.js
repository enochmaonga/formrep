const express = require('express')
const rep = express();
const port = 6000;

rep.get('/', (req, res) => {
  res.send('Hello World!')
});

rep.listen(port, () => {
  console.log(`app listening on port ${port}!`)
});