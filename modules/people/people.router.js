/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  return res.status(200).json(People.get());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  console.log(req.body);
  People.enqueue(person);
  res.status(201).json(person);
});

module.exports = router;
