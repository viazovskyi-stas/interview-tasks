// TODO METHOD AT
const array = [1, 2, 3, 4, 5, 6]
console.log(array.at(1))
console.log(array.at(-1))

const string = 'Bitch'
console.log(string.at(0))
console.log(string.at(-2))

// TODO error extension
try {
  console.log(1)
} catch (err) {
  throw new Error('Error msg', { case: 'invalid data' })
}

// TODO Object.hasOwn(inst, prop)
const Dog = {
  say: 'meow',
}
Dog.hasOwnProperty('say')
// it calls from prototype and sometimes it is bad when u create
// obj by Object.create(null) - it dont have this prototype
// to solve this issue usually packages use npm "has"
Object.hasOwn(Dog, 'say')

// TODO private

class Foo {
  #value = 0 // private
  value = 0 // not private and can be with the same name as private

  get value() {
    return this.#value
  }
  set value(newValue) {
    this.#value = newValue
  }
}

const a = structuredClone({ a: 213123 })
