// TODO

// compose(c, b, a)(x, y, z) -> c(b(a(x, y, z)))

function addBase(...num) {
  if (num.length > 1) {
    const [a, b] = num
    return a + b
  } else {
    const [a] = num
    return b => {
      return a + b
    }
  }
}

const addTen = addBase(10)

// console.log(addTen)

// 1. addBase(5)(5) ->  10
// 2. addTen(10) -> 20
// 3. addTen(20) -> 30

function compose(...func) {
  return (...args) => {
    return func.reduceRight((prev, curr, index) => {
      // const funArgs = index === func.length - 1 ? [...args] : [prev]
      const funcArgs = prev.length > 1 ? prev : [prev]
      return curr(...funcArgs)
    }, args)
  }
}

const calculate = compose(
  addTen, // (20) -> 30
  addTen, // (10) -> 20
  // addTen
  (a, b) => addBase(a)(b) // (5, 5) -> 10
)

const result = calculate(5, 5) // 30
//
console.log('Result >>> ', result)
