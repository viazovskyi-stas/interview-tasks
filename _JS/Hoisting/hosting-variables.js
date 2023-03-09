// var a = 5
//
// function test() {
//   console.log('-----', a)
//   if (a) {
//     console.log('1', a)
//     var a = 10
//   }
// }
// test()
;(function () {
  var a = (b = 3)
})()

console.log('a defined? ' + (typeof a !== 'undefined'))
console.log('b defined? ' + (typeof b !== 'undefined'))
