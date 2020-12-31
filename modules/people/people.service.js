const Queue = require('../queue/Queue');
const store = require('../../store/people');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    console.log(people.all());
    return people.all();
  },

  enqueue(person) {
    // console.log(people.enqueue(person));
    return people.enqueue(person);
  },

  dequeue(person) {
    return people.dequeue(person);
  }
};