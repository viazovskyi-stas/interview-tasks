function someFn() {
  console.log(arguments)
}

Function.prototype.delay = function (delay) {
  return function (...args) {
    setTimeout(() => {
      this(...args)
    }, delay)
  }.bind(this)
}

const someFunWithDelay = someFn.delay(2000)

someFunWithDelay(1, 2, [])
