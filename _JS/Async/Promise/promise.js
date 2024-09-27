let p1 = new Promise((resolve, reject) => {resolve('foo')
  console.log('after resolve')
})

let p2 = new Promise((resolve, reject) => {
  reject('bar')
})





p1.then(val => {
  console.log(val)
  return p2
})
  .then(val => {
    console.log('baz')
  })
  .catch(err => {
    console.log(err)
  })
console.log('after')

function x() {
  const result = returnOne()
  return Promise.resolve(result)
}

async function y() {
  return returnOne()
}

function returnOne() {
  throw new Error('something went wrong')
}

x()
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.log(e)
  })

x()

// TEST


async function a () {
  for (let i= 0; i < 10; i++) {
    console.log(i)
  }
}
console.log('before')
a().then(() => { console.log('after')})
console.log('after after')

// stack                  promise      macroTask
// before                 then
// 1-10
// after-after


// promise a

// const a = async () => {
//   try {
//     return 1;
//   } catch (err) {
//     return 2;
//   } finally {
//     return 3;
//   }
// }
//
// console.log(a())


// before
// after after
// 1 - 10
// after
