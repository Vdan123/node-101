// 这里是 node-async 的 Promise 的解决方案
// Promise 解决的是异步风格问题
// then 或者 catch 在链式调用中会捕获第一个成功或者失败的返回
// 如果 promise 内的回调函数是 throw 则状态机为 reject , 如果是 return 则状态为 resolve
// 回调函数中 return 了一个 Promise ，则改回调函数的状态和 return 的 Promise 状态一致

(function () {

  var promise1 = interview(4)
  var promise2 = interview(1)
    .then(() => {
      return interview(2)
    })
    .then(() => {
      return interview(3)
    })
    .then(() => {
      console.log('smile');
    })
  // .catch((err) => {
  //   console.log('cry at ' + err.round + ' round ');
  // })

  Promise.all([
    promise1,
    promise2
  ]).then(() => {
    console.log('都成功了');
  }).catch(err => {
    console.log(err, '其中一个失败了'); // 这里只能抓到第一个失败的
  })

  function interview(round) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve()
        } else {
          var error = new Error('fail')
          error.round = round

          reject(error)
        }
      }, 500)
    })
  }
})()