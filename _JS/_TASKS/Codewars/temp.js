function isPalindrome(str) {
  const dividedLength = Math.floor(str.length / 2)
  const firstHalf = str.substring(0, dividedLength)
  const secondHalf = str
    .substring(str.length - dividedLength, str.length)
    .split('')
    .reverse()
    .join('')
  return firstHalf === secondHalf
}
// console.log(isPalindrome('azbba'))

function sum() {
  if (arguments.length > 1) {
    return [...arguments].reduce((acc, curr) => acc + curr, 0)
  }
  return b => b + arguments[0]
}

// console.log(sum(2, 3)) // 5
// console.log(sum(2)(3)) // 5

// input mass and number
// [4, 9, 7, 3, 5] 8
// output return indexes of pare number
// 3, 4

// 0, 1, 1, 2, 3, 5, 8, 13, 21

function nthFibo(n) {
  let fibo = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1]
  }
  return fibo.at(n - 1)
}

console.log(nthFibo(1))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)

    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
console.log(searchInsert([1, 3, 5, 6], 5))
