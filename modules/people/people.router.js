  
const express = require('express');
const xss = require('xss');
const jsonBodyParser = express.json();
const people = require('../../store/people');
const Queue = require('../queue/Queue');

const usersRouter = express.Router();
const userQueue = new Queue();

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

usersRouter
  .route('/')
  .get((req, res, next) => {
    shuffleArray(people);
    res.status(200).json(people);
  })
  .post(jsonBodyParser, (req, res, next) => {
    // console.log(req.body.name)
    if(!req.body.name){
      res.status(400).json('Name not included in body');
    }
    else {
      let newUser = xss(req.body.name);
      people.push(newUser);
      res.status(201).json(newUser);
    }
  });

module.exports = usersRouter;
