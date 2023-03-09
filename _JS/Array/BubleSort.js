const bubbleSort = arr => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    // console.log(i)
    let wasSwap = false
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      console.log(arr[j], arr[j + 1], wasSwap, j)
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
        // ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // es6
        wasSwap = true
      }
    }
    if (!wasSwap) break
  }
  return arr
}

console.log(bubbleSort([6, 89, 1, 2, 3, 22, 10]))
