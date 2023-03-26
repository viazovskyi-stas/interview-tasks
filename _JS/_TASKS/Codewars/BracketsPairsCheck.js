const Bracket = {
  OPEN: '(',
  CLOSED: ')',
}
// function validParentheses(parens) {
//   const brackets = parens.split('')
//   let counter = 0
//   for (let i = 0; i < brackets.length; i++) {
//     if (brackets[i] === Bracket.OPEN) {
//       counter++
//     }
//     if (brackets[i] === Bracket.CLOSED) {
//       counter--
//     }
//     if (counter < 0) {
//       return false
//     }
//   }
//   return counter === 0
// }

function validParentheses(parens) {
  let n = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') n++
    if (parens[i] === ')') n--
    if (n < 0) return false
  }

  return n === 0
}

console.log(validParentheses(''))
