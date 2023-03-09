//  find the sum of maximum of the sub arrays, in optimal solution
const maxSequence = function (arr) {
  let gMax = 0
  let cMax = 0
  for (let current of arr) {
    cMax += current
    if (current > cMax) cMax = current
    if (cMax > gMax) gMax = cMax
  }
  return gMax
}
console.log(maxSequence([5, -2, -4, 4, 4]))
