require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('../../config');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'common';
app.use(morgan(morganOption));
app.use(helmet());
app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

app.use((error, req, res, next) => {
  let message = '';
  if (NODE_ENV === 'development') {
    console.log(error);
    message = error.message;
  }
  else {
    message = 'Server Error';
  }
  res.json({message});
});



module.exports = app;
