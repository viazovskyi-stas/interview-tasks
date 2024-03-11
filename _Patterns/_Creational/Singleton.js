
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


// Why anti-pattern

// 1. Violating Single Responsibility Principle :
//
//     Single Responsibility Principle states that every class should have a single task to do.
//
//     In case of Singleton class it will have two responsibility one to create an instance and other to do the actual task.
//
// 2. Breaks the Open Closed Principle :
//
//     Open Closed Principle can be explained in a single statement “Open for Extension closed for Modification”.
//
//     Singleton class always returns its own instance and is never open for extension.
//
// 3. Difficult to Test :
//
//     Singleton class have a global state for there instance. Programs that have global state hide there dependencies and makes it difficult to test.
//
// 4. Dependency Inversion Violation :
//
//     Dependency Inversion Principle ensures that change in low level details should not impact the high level abstraction.
//
//     Any low level changes in singleton pattern system we need to do change the Singleton class.
//
// 5. Tight Coupling :
//
//     There will be number of classes calling the Singleton class instance.
//
//     Any change in Singleton class will impact all other classes, this results into tight coupling.
//
//     Tight coupling is always harmful for system, any small change you can need to change all the classes implementing it, change all the test classes.