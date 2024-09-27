// input mass and number
// [4, 9, 7, 3, 5] 8
// output return indexes of pare number
// 3, 4

// Solution O(n2)
function pareSum(arr, sumNumber) {
  const indexOfNumbers = []

  for (let i = 0; i < arr.length; i++) {
    let sumFind = false
    const pareArray = arr.filter((item, index) => index !== i)
    for (let j = 0; j < pareArray.length; j++) {
      if (arr[i] + pareArray[j] === sumNumber) {
        indexOfNumbers.push(i, arr.indexOf(pareArray[j]))
        sumFind = true
      }
    }
    if (sumFind) break
  }
  return indexOfNumbers
}

// Solution O(n)
function pareSum1(arr, sumNumber) {
  const cache = {}

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    const pairIndex = cache[number]
    if (typeof pairIndex !== 'undefined') {
      return [pairIndex, i]
    }
    cache[sumNumber - number] = i
  }

  return []
}

console.log(pareSum([4, 9, 7, 3, 5], 8))
console.log(pareSum1([4, 9, 7, 3, 5], 8))

