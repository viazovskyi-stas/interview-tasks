// make custom promise All

// Example
// function runInParallel(fetch1, fetch2) {
//   return Promise.all([fetch1(), fetch2()])
// }

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function fetch1() {
  return sleep(800).then(() => 123)
}

function fetch2() {
  return sleep(600).then(() => 222)
}

function promiseAll(promises) {
  const results = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then(res => {
          count++
          console.log('res', res)
          results[i] = res
          if (count === promises.length) {
            resolve(results)
          }
        })
        .catch(err => reject(err))
    }
  })
}

function runInParallel(fetch1, fetch2) {
  return promiseAll([fetch1(), fetch2()])
}
runInParallel(fetch1, fetch2).then(res => {
  console.log(res)
})
