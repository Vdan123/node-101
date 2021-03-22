
// 这里演示， try/catch 是无法捕获异步函数中的 throw 的，因为 JS 的每个事件循环都是独立调用栈。
function interview(callback) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      callback(null, 'success') // node 中第一个参数默认为 error , 第二个则是返回的参数
    } else {
      // throw new Error('fail')
      callback(new Error('fail'))
    }
  }, 1000)

  // 这里则可以捕获 throw 
  // if (Math.random() < 0.8) {
  //   callback('success')
  // } else {
  //   throw new Error('fail')
  // }
}

// console.time('interview')

// try {
//   interview(function () {
//     console.log('pass');
//   })
// } catch (e) {
//   console.log('cry');
// }


// console.timeEnd('interview');

// 异步函数在流程控制中会出现，回调地狱。同时，也无法很好的控制异步并发；

console.time('interview')

interview(function (err, res) {
  if (err) {
    return console.log('cry');
  }

  interview(function (err, res) {

    if (res) {
      console.log(res, '2th');
    } else {
      console.log('Oh no',);
    }


  })

})


console.timeEnd('interview')