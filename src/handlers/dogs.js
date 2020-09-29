'use strict';
const axios = require('axios');

function dogs(axios) {
  return (req, res) => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(output => {
        res.status(200).send(output.data);
      })
      .catch(error => {
        res.status(500).send({ error: 'failed to fetch data!' });
      });
  };
}

module.exports = dogs;
