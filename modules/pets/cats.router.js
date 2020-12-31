/* eslint-disable no-unused-vars */
const express = require('express');
const cats = require('../../store/cats');
const Queue = require('../queue/Queue');

const catsRouter = express.Router();
const catQueue = new Queue();

cats.forEach((cat) => catQueue.enqueue(cat));

catsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(catQueue.first.value);
  })
  .delete((req, res, next) => {
    catQueue.enqueue(catQueue.dequeue());
    res.status(200).json(catQueue.dequeue());
  });

module.exports = catsRouter;
