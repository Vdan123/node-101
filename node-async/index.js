// await 的作用：

// (function () {
//   var result = async function () {
//     var content = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(6)
//       }, 500)
//     })

//     console.log(content, 'content');

//     return 1
//   }()

//   setTimeout(() => {
//     console.log(result, 'result');
//   }, 800)
// })()



(function () {
  var result = async function () {
    try {
      var content = await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('88'))
        }, 500)
      })
    } catch (error) {
      console.log(error, 'error ');
    }

    console.log(content, 'content');

    return 1
  }()

  setTimeout(() => {
    console.log(result, 'result');
  }, 800)
})()

  //  throw 这样会将错误抛向全局，导致程序崩溃
  (function () {
    try {
      setTimeout(() => {
        throw new Error('error')
      }, 500)
    } catch (err) {
      console.log(err, 'catch error');
    }

  })()