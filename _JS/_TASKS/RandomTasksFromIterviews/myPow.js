/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let multiplier = x
    for (let i = 0; i < Math.abs(n) - 1; i++) {
        multiplier *= x
    }
    // console.log(Math.sin(n) < 0, multiplier)
    return n < 0 ? 1 / multiplier : multiplier
}
console.log(myPow(2, -2))