// 如何实现模块？ 

// 首先需要设定每个模块为单独的作用域，在JS中通过函数实现
// 如何在 a 的作用域中，能访问到 b 作用中的值？

(function (modules) {
  function webpack(id) {
    var variable = {
      state: false,
      exports: {

      }
    }
    modules[id].call(variable.exports, variable, variable.exports, webpack)

    return variable.exports
  }

  webpack('a') // 这里确定入口文件

})({
  'a': (function (a1, a2, webpack) {
    var some = webpack('b') // 通过这里拿到了 b 里面的值
    // some.fn()
    console.log(some, 'some///');
  }),
  'b': (function (b1, b2, webpack) {
    b1.exports = { // 这里改的是 module 本身的 exports 变量
      oo: 'ooo'
    }

    b2.test = 'test'
    b2.fn = function () {
      console.log('b222');
    }

  })
})