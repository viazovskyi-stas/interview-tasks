var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let closest = nums[0] + nums[1] + nums[nums.length - 1]
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      }
      if (sum > target) {
        k--
      } else {
        j++
      }
    }
  }
  return closest
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
