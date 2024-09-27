// undefined
// console.log(a)
var a
console.log(typeof a) // created but value undefined
console.log(typeof z) // not defined



// without strict mode it will create global variable
function testFun() {
  val = 'wtf'
}
testFun()

console.log(val)


console.log()
