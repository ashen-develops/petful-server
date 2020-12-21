/* eslint-disable no-unused-vars */
class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  generateItem(data, next = null) {
    return {
      value: data,
      last: null,
      next
    };
  }

  enqueue(data) {
    // Add some data to the queue.
    if (this.first === null) {
      this.first = this.generateItem(data);
    }

    else if (this.last === null) {
      this.last = this.first;
      this.first = this.generateItem(data, this.last);
      this.last.last = this.head;
    }

    else {
      const old = this.first;
      this.first = this.generateItem(data, this.last);
      old.last = this.first;
    }
    this.length++;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.length === 1) {
      const data = this.first;
      this.length--;
      this.first = null;
      return data;
    }
    const old = this.last;
    this.last = this.last.last;
    this.last.next = null;
    old.last = null;
    old.next = null;
    this.length--;
    return old;
  }

  show() {
    // Return the next item in the queue.
    return this.last.value;
  }

  all() {
    // Return all items in the queue.
    const queue = new Array(this.length);
    let item = this.last;
    for (let i = 0; i < this.length; i++) {
      queue[i] = item.value;
      item = item.last;
    }
    return queue;
  }
}

module.exports = Queue;
