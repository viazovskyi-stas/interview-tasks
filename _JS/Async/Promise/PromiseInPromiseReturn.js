const myPromise = new Promise((resolve, reject) => {
  // throw new Error("error")
  resolve("Response")
})
// myPromise.catch(err => {
//   console.log(err)
// })

function waitForResults(fetch1, fetch2) {
  const result = []

  return fetch1()
    .then((res) => {
      result.push(res)
    })
    .then(() =>
      // if there are promise in promise it will wait until fetch2 finish
      // and then return. There are no promise in promise
      fetch2.then((res) => [...result, res])
    )
}