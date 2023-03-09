const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
const b1 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

const a2 = [0, 10, 3, 1, 2, 7, 2, 8, 0, 1, 8, 2, 9, 7, 3, 7, 6, 6]
const b2 = [4, 49, 1, 9, 36, 9, 4, 49, 1, 36, 81, 0, 100, 4, 64, 49, 64, 1]

const comp = (array1, array2) =>
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every(item => {
    const index = array2.indexOf(Math.pow(item, 2))
    return index > -1 ? array2.splice(index, 1) : false
  })

console.log(comp(a, b))
