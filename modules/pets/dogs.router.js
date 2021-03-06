const express = require('express');
const dogs = require('../../store/dogs');
const Queue = require('../queue/Queue');

const dogsRouter = express.Router();
const dogQueue = new Queue();

dogs.forEach(dog => dogQueue.enqueue(dog));

dogsRouter
  .route('/')
  .get((req, res, next) => {
    console.log(dogQueue.first.value, "dogQueue")
    res.status(200).json(dogQueue.first.value);
  })
  .delete((req, res, next) => {
    dogQueue.enqueue(dogQueue.dequeue());
    res.status(200).json(dogQueue.dequeue());
  });

module.exports = dogsRouter;
