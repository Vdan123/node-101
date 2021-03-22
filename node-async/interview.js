function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve('smile')
      } else {
        var error = new Error('fail')
        error.round = round

        reject(error)
      }
    }, 500)
  })
}

(async function () {
  try {
    await interview(1)
    await interview(2)
    await interview(3)
  } catch (error) {
    console.log('cry at ' + error.round + ' round ');
  }



})()