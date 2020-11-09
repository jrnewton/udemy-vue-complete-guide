'use strict';

const express = require('express');
const app = express();

app.use(express.static('app'));

const port = 8080;
app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
