// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
//   He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//   Given a number n, could you tell me the numbers he excluded from the sequence?

function removeNb(n) {
  // from the instruction:
  // a * b = S(n) - a - b

  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2

  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)

  // but a and b are natural and up to n

  var results = []
  for (var a = 1; a <= n; a++) {
    var b = ((n * (n + 1)) / 2 - a) / (a + 1)
    if (b % 1 === 0 && b <= n) results.push([a, b])
  }
  return results
}

console.log(removeNb(26))
