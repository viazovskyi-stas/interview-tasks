class Human {
  constructor(name) {
    this.name = name
  }

  sayMyName() {
    return 'Hello, I am ' + this.name
  }
}

class Men extends Human {
  constructor(name) {
    super(name)
  }
}
class Coder extends Human {
  constructor(name) {
    super(name)
  }
}

const alex = new Men('Alex')
const leo = new Coder('Leo')

alex.sayMyName() // Hello, I am Alex
leo.sayMyName() // Hello, I am Leo
