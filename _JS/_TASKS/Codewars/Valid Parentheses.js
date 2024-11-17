function isValid(s) {
  let stack = []
  let brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (isClosetBracket(current)) {
      // console.log(brackets[current], stack)
      if (brackets[current] !== stack.pop()) return false
    } else {
      stack.push(current)
    }
  }

  return stack.length === 0
}

function isClosetBracket(ch) {
  return [')', '}', ']'].indexOf(ch) > -1
}

console.log(isValid('[(){}'))
