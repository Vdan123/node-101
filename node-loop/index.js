const eventloop = {
  queue: [],
  loop() {

    while (this.queue.length) {
      var callback = this.queue.shift()

      callback();
    }

    setTimeout(this.loop.bind(this), 50)
  },

  add(callback) {
    this.queue.push(callback)
  }
}

eventloop.loop() // 一直处于监听状态

eventloop.add(() => {
  eventloop.add(() => {
    console.log(1);
  })
}, 3000)

eventloop.add(() => {
  eventloop.add(() => {
    console.log(2);
  })
}, 3000)

