// Conditional Types

type Test<T> = T extends string ? true : false

type R = Test<33>

// Example 1

interface User {
  id: string
}

interface Message {
  id: number
}

function getId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number {
  return obj.id
}

const r1 = getId({} as User)
const r2 = getId({} as Message)

type NotFalsy<T = null> = T extends null | undefined | false | 0 ? never : T
let z: NotFalsy<number>

// z ='hello'
z = null // error

// Example 2

type Filter<T, U> = T extends U ? never : T

type X = Filter<'a' | 'b' | 'c', 'b'>
type X2 = Exclude<'a' | 'b' | 'c', 'b'>

// Example 3
// type GetStatus<T> = T extends object ? (T extends { status: string } ? T['status'] : null) : null
type GetStatus<T> = T extends infer U ? U extends { status: any } ? U['status'] : null : null
type Status = GetStatus<{ status: 'str' }>
type StatusErr = GetStatus<{ status: 2 }>

// INFER

type TryInfer<T extends object = object> = T extends infer R ? R[keyof R] : never
type m = TryInfer<{ a: 1, b:2}>

// Example 4

function test() {
  return { status: '' }
}

type FunctionResult<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type RR = FunctionResult<typeof test>
type RR2 = ReturnType<typeof test>