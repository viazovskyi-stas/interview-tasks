let myArray = [...Array(10)].map((el, index) => index)

myArray.push(10)
myArray = [...myArray, 11] // on big data sets it not worth it because it recreate array and it take memory

console.log(myArray)

// custom map
function map<T, K>(array: T[], cb: (value: T, index: number, array: T[]) => K): K[] {
  return array.reduce((acc, value, index, originalArray) => {
    const res = cb(value, index, originalArray)
    acc.push(res)
    return acc
  }, [])
}

// custom filter
function filter<T>(array: T[], cb: (value: T, index: number, array: T[]) => boolean): T[] {
  return array.reduce((acc, value, index, originalArray) => {
    const res = cb(value, index, originalArray)
    res && acc.push(value)
    return acc
  }, [])
}

// methods
// Метод flat()
// возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты"
// на указанный уровень depth.
