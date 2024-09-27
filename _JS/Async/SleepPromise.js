async function SleepPromise() {
  await (() => new Promise(res => setTimeout(res, 2000)))()
  return 'im sleeping'
}

async function sleep(delay) {
  return new Promise(resolve => setTimeout(() => resolve(delay), delay))
}

// console.log(
//   sleep(2000).then(res => {
//     console.log(res)
//   })
// )

