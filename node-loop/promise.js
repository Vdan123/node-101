/**
 * 这里测试的 setTimeout 和 Promise 的执行关系
 * 执行结果：a, c, d, b 
 */
const test = new Promise((resolve, reject) => {
  console.log('a');
  resolve()
})

setTimeout(() => console.log('b'), 0)

console.log('c')

test.then(() => console.log('d'))


/**
 * 这里在 Promise 中封装了 setTimeout, 这个是将 setTimeout 变为可以异步的函数
 * 执行结果： c/a/b
 */

function sleep(duration) {
  return new Promise((resolve, reject) => {
    console.log('c');
    setTimeout(resolve, duration)
  })
}

sleep(0).then(() => {
  console.log('b');
})

console.log('a')

/**
 * 
 */

// 错误答案：3、7、1、4、2、5、6
// 正确答案：3、7、4、1、2、5
// 先梳理宏任务，在梳理微任务
// .then 的都会放入到微任务队列，而 setTimeout 中的 resolve 的状态已经被 resolve(1) 改变，所以无法在改变状态
// const first = () => (new Promise((resolve, reject) => {
//   console.log(3);

//   let p = new Promise((resolve, reject) => {
//     console.log(7);
//     setTimeout(() => {
//       console.log(5);
//       resolve(6);
//     }, 0)
//     resolve(1);
//   });

//   resolve(2);

//   p.then((arg) => {
//     console.log(arg);
//   });

// }));

// first().then((arg) => {
//   console.log(arg);
// });

// console.log(4);

// 这里 setTimeout 被执行为新的宏任务
// 首先执行的是 Promise <pending> 状态，等待 resolve 或者 reject
// 在 1000 毫秒到时，执行内部的操作
// function test() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('test1');
//       resolve(1)
//     }, 1000)
//   })
// }


// const date = Date.now()

// test().then((res) => {
//   console.log(res, Date.now() - date);
// })

// // 上一题的变种
// function test() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('test1');
//     }, 1000)
//     resolve(1)
//   })
// }


// const date = Date.now()

// test().then((res) => {
//   console.log(res, Date.now() - date);
// })


function test(duration) {
  return new Promise(resolve => {
    console.log('c');

    setTimeout(() => {
      console.log('d');
      resolve(1)
    }, duration)

  })
}

async function foo() {
  console.log('a');

  test(1000) // 这里如果不加 await 则执行顺序为 a\c\b\d 
  // 如果加上 await 则执行顺序为 a\c\d\b

  console.log('b');
}

foo()
















