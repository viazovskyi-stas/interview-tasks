// Prototype
// Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

const zombie = {
  eatBrains() {
    return 'Onomnom'
  },
}

const chad = Object.create(zombie, { name: { value: 'chad' } })

console.log(chad.__proto__)
console.log(Object.getPrototypeOf(chad))
console.log(chad.name)
console.log(chad.eatBrains())
