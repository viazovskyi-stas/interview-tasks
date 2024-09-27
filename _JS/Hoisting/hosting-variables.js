// var a = 5
//
// function test() {
//   console.log('console.1', a)
//   if (a) {
//     console.log('console.2', a)
//     var a = 10
//   }
// }
// test()

// console.log(a)

;(function () {
  var a = (b = 3)
})()

// console.log(a, b)
//
console.log('a defined? ' + (typeof a !== 'undefined'))
console.log('b defined? ' + (typeof b !== 'undefined'))
