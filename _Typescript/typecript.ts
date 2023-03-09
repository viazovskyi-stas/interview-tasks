// https://www.typescriptlang.org/docs/handbook/utility-types.html

// TODO type vs interface

// TODO interface
// cannot extend from type that consist union
// but can - interface A extends A, B

// it can have multiple definition like
// interface A {
//   a: number
// }
// interface A {
//   b: number
// }
//types cannot do it

interface tt {
  a: number
}

// TODO type
// alias primitive type
type UniqueId = string
interface Car {
  id: UniqueId
  date: string
}

// Tuple
type State = [number, (n: number) => void]
// Union
type A = { age: number }
type B = { name: string }
type C = A | B

// TODO usages

interface User {
  age: number
  name: string
}
type Nullable<T> = T | null | undefined

const User: Nullable<User> = null

// TODO
interface HasLength {
  length: number
}
function logLength<T extends HasLength>(value: T) {
  console.log(value.length)
}
logLength('hello')
logLength<Array<number>>([1, 2, 3])
// logLength(false)
