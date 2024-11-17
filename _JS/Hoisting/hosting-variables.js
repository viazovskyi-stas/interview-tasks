var a = 5 // глобальная переменная

function test() {
  // var a; // локальная переменная (объявление поднято в начало функции)
  console.log('console.1', a)
  if (a) {
    console.log('console.2', a)  // undefined (локальная переменная есть, но значение ещё не присвоено)
    var a = 10
  }
}
test()
console.log(a)

// console.log(a)
//
// ;(function () {
//   var a = (b = 3)
// })()
//
// // console.log(a, b)
// //
// console.log('a defined? ' + (typeof a !== 'undefined'))
// console.log('b defined? ' + (typeof b !== 'undefined'))
