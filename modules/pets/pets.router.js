/* eslint-disable no-unused-vars */
const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  return res.json(Pets.get()).status(200);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  People.dequeue();
  return res.status(204).end();
});

module.exports = router;
