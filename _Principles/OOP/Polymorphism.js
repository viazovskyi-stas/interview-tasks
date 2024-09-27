// Polymorphism in JavaScript refers to the concept of reusing a single piece of code multiple times.
// By utilizing Polymorphism, you can define multiple forms of a method, and depending upon the runtime scenario,
// one type of object can have different behavior.

class Human {
  constructor(name) {
    this.name = name
  }

  say() {
    return `Hello, my name is ${this.name}, I like travelling`
  }
}

class Men extends Human {
  constructor(name) {
    super(name)
  }
  // Берем метод say у родителя.
}

class Coder extends Human {
  constructor(name) {
    super(name)
  }

  say() {
    // Переопределяем метод родителя say для отображения нового значения.
    return `Hello, my name is ${this.name}, I like coding`
  }
}

const alex = new Men('Alex')
const leo = new Coder('Leo')

alex.say() // "Hello, my name is Alex, I like travelling"
leo.say() // "Hello, my name is Leo, I like coding"
