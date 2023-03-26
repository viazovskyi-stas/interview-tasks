/*
 * Write a function that accepts a
 * square matrix (N x N 2D array) and returns the determinant of the matrix.
 *
 *
 * A 1x1 matrix |a| has determinant a.
 *
 * A 2x2 matrix [ [a, b], [c, d] ]
 * has determinant: a*d - b*c.
 *
 * For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ]
 * a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor)
 *
 * */

m1 = [[1]]

m2 = [
  [4, 6],
  [3, 8],
]

m3 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
]

m4 = [
  [2, 4, 2, 3],
  [3, 1, 1, 4],
  [1, 2, 0, 1],
  [1, 3, 9, 1],
]

// By Laplas
// Аij=(-1)^(i+j)*M
function determinant(m) {
  if (m.length === 1) return m[0][0]
  if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0]
  return m[0].reduce((acc, current, i) => {
    const cutLines = m.slice(1).map(c => c.filter((_, j) => i !== j))
    return acc + Math.pow(-1, i + 2) * current * determinant(cutLines)
  }, 0)
}

console.log(4 ** 3)

console.log(determinant(m3))
