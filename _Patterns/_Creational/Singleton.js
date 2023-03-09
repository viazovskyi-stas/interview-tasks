
// module variation
function Singleton() {
  console.log(Singleton._instance)
  "use strict";
  if (Singleton._instance) {
    // This allows the constructor to be called multiple times
    // and refer to the same instance. Another option is to
    // throw an error.
    return Singleton._instance;
  }
  Singleton._instance = this;
  // Foo initialization code

  return {
    // public interface
    publicMethod1: function () {
      // All private members are accessible here
    },
    publicMethod2: function () {

    }
  };
}

Singleton.getInstance = function () {
  return Singleton._instance || new Singleton();
}

// class variation
class SingletonClass {
  constructor() {
    if (SingletonClass._instance) {
      // show error or return last instance
      throw new Error("Singleton classes can't be instantiated more than once.")
      // return SingletonClass._instance
    }
    SingletonClass._instance = this;
  }
}

const instanceOne = new SingletonClass() // Executes successfully
const instanceTwo = new SingletonClass() // Throws error