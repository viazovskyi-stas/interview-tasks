// Builder
// is a creational design pattern that lets you construct complex objects step by step.
// The pattern allows you to produce different types and representations of an object using the same construction code.

class HotDog {
    constructor(
        bun, // булочка,
        ketchup,
        mustard, // горчица,
        kraut //  капуста
    ){}

    addKetchup() {
        this.ketchup = true
        return this
    }

    addMustard() {
        this.mustard = true
        return this
    }

    addKraut() {
        this.kraut = true
        return this
    }

}

const myLunch = new HotDog()


// method chaining
myLunch.addKetchup().addMustard().addKraut()

console.log(myLunch)