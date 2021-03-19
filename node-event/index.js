const instance = require('./lib')

instance.addListener('newLesson', (res) => {
  console.log(res, 'oooo');
})