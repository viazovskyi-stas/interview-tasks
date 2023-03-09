// let inc = (function () {
//   let counter = 0
//   return function () {
//     counter++
//     console.log(counter)
//   }
// })()

function inc() {
  inc.counter = inc.counter || 0
  inc.counter++
  console.log(inc.counter)
}

// closure/locking task
// inc() // 1
// inc() // 2

// test2
function counter() {
  let count = 0
  function increment() {
    count++
  }
  function decrement() {
    count++
  }

  return {
    count,
    increment,
    decrement,
  }
}

// test3
let add = (function () {
  let counter = 0
  return function () {
    return ++counter
  }
})()
//
// console.log(add())
// console.log(add())
// console.log(add())

function sum(n) {
  console.log(n)
  return b => sum(n + b)
}

// console.log(sum(1)(5)(10))

// sum(1)(2); // 1 3
// sum(1)(5)(10); // 1 6 16

function addOne() {
  let n = 1
  function add() {
    n++
    return add
  }
  add.getValue = () => n

  return add
}

// console.log(addOne()()().getValue()); // 3
// console.log(addOne().getValue()); // 1
// console.log(addOne()().getValue()); // 2

const testSum = function (a = 0) {
  if ([...arguments].length > 1) {
    return [...arguments].reduce((acc, curr) => acc + curr, 0)
  }
  let count = function (operand = 0) {
    if (operand) {
      a += operand
      return count
    } else {
      return a
    }
  }
  return count
}

// console.log(testSum(1, 2, 3, 4))
// console.log(testSum(1)(2)(3)(4)())

class Counter {
  constructor() {
    this.count = 0
  }
  increment() {
    this.count++
  }
}

const counterOne = new Counter()

const proxyIncrement = new Proxy(() => {}, {
  apply: function (target, thisArg, argumentsList) {
    counterOne.increment()
    return counterOne.count
  },
})

// console.log(proxyIncrement())
// console.log(proxyIncrement())
// console.log(proxyIncrement())

function addOne1() {
  let n = 1
  function add() {
    n++
    return add
  }
  add.getValue = () => n

  return add
}

// console.log(addOne1()()().getValue()); // 3
// console.log(addOne1().getValue()); // 1
// console.log(addOne1()().getValue()); // 2
