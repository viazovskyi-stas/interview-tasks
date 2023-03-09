let p1 = new Promise((resolve, reject) => resolve('foo'))

let p2 = new Promise((resolve, reject) => {
  reject('bar')
})

console.log('before')

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

// x()
//   .then(r => {
//     console.log(r)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// x()
