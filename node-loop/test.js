const loops = {
  queue: [],

  loop() {
    while (this.queue.length) {
      const callback = this.queue.shift()
      callback()
    }

    setTimeout(this.loop.bind(this), 50)
    // setTimeout(() => this.loop.bind(this), 50) // 这里不执行， this.loop.bind 本身就是一个回调函数
  },

  add(callback) {
    this.queue.push(callback)
  }
}

loops.loop() // 执行监听模式


setTimeout(() => {
  loops.add(() => {
    console.log('我是第一个要执行的任务');
  })
}, 500)

setTimeout(() => {
  loops.add(() => {
    console.log('我是第二个要执行的任务');
  })
}, 800)

setTimeout(() => {
  loops.add(() => {
    console.log('我是第三个要执行的任务');
  })
}, 1100)