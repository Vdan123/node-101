const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('newLesson', this)
    }, 1000)
  }
}
const myEmitter = new MyEmitter();
module.exports = myEmitter;