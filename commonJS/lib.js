
exports.add = function (a, b) {
  return a + b
}

module.exports = function minus(a, b) {
  return a - b
}

setTimeout(() => {
  console.log(exports, '我在这');
}, 2000)