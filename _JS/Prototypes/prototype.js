// function and classes have prototype
// arrow function do not have prototype
// _proto_ is a marker on parent class prototype with which it created
// prototype is unique for each fun/class

const test = Object.create({ x: 3 })
const test2 = { x: 3 }

console.log(test2.__proto__)
console.log(test.hasOwnProperty('x'))
console.log(test2.hasOwnProperty('x'))

function Person() {
  return 2
}
Person.prototype.getTodo = function () {
  return 'zzz'
}

const z = new Person()

console.log(z.getTodo())
