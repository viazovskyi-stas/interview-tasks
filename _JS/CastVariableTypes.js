// prioritized fun
// 1.[Symbol.toPrimitive]
// 2 если нужно привести к строке то вызовется toString()
// 3 если нет valueOf()

// example 1
const weirdConst = {
  wasCalled: false,
  valueOf() {
    if (this.wasCalled) return false
    this.wasCalled = true
    return this.wasCalled
  },
  toString() {},
  // [Symbol.toPrimitive]: () => {},
}

console.log(weirdConst == true && weirdConst == false)

// example 2
const a = {
  toString() {
    return 1
  },
}
console.log(a + 2)

// example 3
let hits = ''
const base = {}
function prop() {
  hits += 'A' // 1
  return {
    toString: () => {
      // throw new Error('error')
      return (hits += 'B')
    },
  }
}
const expr = () => (hits += 'C')
// try {
//   base[prop()] = expr()
// } catch (e) {
//   console.log(e)
// }
base[prop()] = expr()
// base[prop() // 3] = expr() // 2
// it is reported error but right side run first
console.log(hits)
// output ACB
