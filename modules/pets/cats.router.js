const express = require('express')
// const xss = require('xss')
// const jsonBodyParser = express.json()
const Queue = require('../queue/Queue')
const cats = require('../../store/cats')

const catsRouter = express.Router()
const catQueue = new Queue()

cats.forEach(cat => catQueue.enqueue(cat))


catsRouter
  .route('/')
  .get((req, res, next) => {
    console.log(catQueue.first.value, "catQueue")
    FirstCat = catQueue.first.value
    res.status(200).json(FirstCat)
  })
  .delete((req, res, next) => {
    AdoptedCat = catQueue.dequeue()
    catQueue.enqueue(AdoptedCat)
    res.status(200).json(AdoptedCat)
  })

module.exports = catsRouter