// function and classes have prototype
// arrow function do not have prototype
// _proto_ is a marker on parent class prototype with which it created
// prototype is unique for each fun/class

const test = Object.create({ x: 3 })
const test2 = { x: 3 }

console.log(test2.__proto__)
console.log(test.hasOwnProperty('x'))
console.log('x' in test)
console.log(test2.hasOwnProperty('x'))

function Person() {
  return 2
}

Person.prototype.getTodo = function () {
  return 'zzz'
}

const z = new Person()

console.log(z.getTodo())


// TASK
function Transport() {
}

Transport.prototype.energy = 40;


const a = [
    // to add special use Object create for special prototype or Object.setPrototypeOf
  new Transport(),
  new Transport(),
  new Transport(),
]

Transport.prototype.energy = 86;

a.forEach(el => console.log(el.energy))
