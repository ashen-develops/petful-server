const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/people', require('../people/people.router'));
app.use('/dogs', require('../pets/dogs.router'));
app.use('/cats', require('../pets/cats.router'));


module.exports = app;