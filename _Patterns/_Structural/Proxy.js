// Proxy
// great example is reactivity system in vue js


class Counter {
    constructor() {
        this.count = 0
    }
    increment() {
        this.count++
    }
}

const counterOne = new Counter()

const proxyIncrement = new Proxy(() => {}, {
    apply: function (target, thisArg, argumentsList) {
        counterOne.increment()
        return counterOne.count
    },
})

// console.log(proxyIncrement())
// console.log(proxyIncrement())
// console.log(proxyIncrement())