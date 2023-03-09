let items = [5, 3, 7, 6, 2, 9]

function quickSort(arr) {
  if (arr.length < 2) return arr
  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  console.log(arr, left, right)
  return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(items))
