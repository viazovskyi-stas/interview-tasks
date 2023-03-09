// https://gist.github.com/EryouHao/c4cb6e7268ca66878988e1e582d952eb
// https://jsv9000.app

// console.log('start')
//
// const promise = new Promise(resolve => {
//   console.log('promise')
//   setTimeout(() => console.log('timeout in promise fun'), 0)
//   resolve('promise resolve')
// })
//
// const promise2 = new Promise(resolve => {
//   console.log('promise 2')
//   resolve('promise2 resolve')
// })
//
// const promise3 = new Promise((resolve, reject) => {
//   console.log('promise 3')
//   resolve('promise3 resolve')
// })
//
// const promise4 = new Promise((resolve, reject) => {
//   console.log('promise 4')
//   resolve('promise4 resolve')
// })
//
// promise.then(b => {
//   setTimeout(() => {
//     console.log('timeout in then')
//     promise3.then((val) => {
//       console.log(val)
//     }).catch(err => console.log(err))
//   },0)
//   promise2.then((val) => {
//     console.log(val)
//     setTimeout(() => {
//       console.log('promise in promise timeout')
//     }, 0)
//   })
//   console.log(b)
// }).catch(err => console.log(err))
//
// setTimeout(() => {
//   promise4.then((val) => {
//     console.log(val)
//   })
//   setTimeout(() => {
//     console.log('timeout in timeout')
//   }, 0)
//   console.log('timeout outside')
// }, 0)
//
//
// const fun = () => console.log('function')
//
// fun()
//
// console.log('end')

/// BLOCK 2

const a = new Promise(resolve => {
  console.log('A')
  setTimeout(() => {
    console.log('Z')
  }, 0)
  resolve('B')
})

setTimeout(() => console.log('C'), 0)

a.then(b => console.log(b))

const d = () => console.log('D')

d()

/// BLOCK 2

/// BLOCK 3

const myPromise = Promise.resolve(Promise.resolve('Promise')) // promise

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0)
  myPromise.then(res => res).then(res => console.log(`${res} 1!`))
  console.log('Last line 1!')
}

async function funcTwo() {
  const res = await myPromise
  console.log(`${res} 2!`)
  setTimeout(() => console.log('Timeout 2!'), 0)
  console.log('Last line 2!')
}
//
// funcOne()
// funcTwo()

/// BLOCK 3
