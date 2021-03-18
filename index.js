const user = process.argv[process.argv.length - 1]

const random = Math.random() * 3

if (random < 1) {
  var computerAction = '石头'
} else if (random > 2) {
  var computerAction = '剪刀'
} else {
  var computerAction = '布'
}

if (user === computerAction) {
  console.log('平手');
} else if (
  user === '石头' && computerAction === '剪刀' ||
  user === '剪刀' && computerAction === '布' ||
  user === '布' && computerAction === '石头'
) {
  console.log('你赢了');
} else {
  console.log('你输了');
}