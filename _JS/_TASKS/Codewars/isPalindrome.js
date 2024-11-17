function isPalindrome(str) {
  const len = Math.floor(str.length / 2)
  for (let i = 0; i < len; i++) if (str[i] !== str[str.length - i - 1]) return false
  return true
}

console.log(isPalindrome('azbba')) // false
console.log(isPalindrome('hello')) // false
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('raccar')) // true

