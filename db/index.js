const mongoose = require('mongoose')

const URL = 'mongodb://root:root@mongo:27017/'

mongoose.connect(URL, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;