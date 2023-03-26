// TEST INPUTS
const a = [1, 2]
const b = [3, 4]

function medianOfSortedArrays(array1, array2) {
  const mergedArray = [...array1, ...array2].sort((a, b) => a - b)
  if (!mergedArray.length) {
    return false
  }
  const half = Math.floor(mergedArray.length / 2)
  if (mergedArray.length % 2) {
    return mergedArray[half]
  }
  return (mergedArray.at(half - 1) + mergedArray.at(half)) / 2
}

console.log(medianOfSortedArrays(a, b))
