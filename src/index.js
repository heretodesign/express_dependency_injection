'use strict';

const server = require('./server');
const axios = require('axios');
const PORT = 4000;

const app = server(axios);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
