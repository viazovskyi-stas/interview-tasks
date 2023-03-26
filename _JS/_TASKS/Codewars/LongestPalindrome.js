/**
 * @param {string} s
 * @return {string}
 */
const s = 'babad'

var longestPalindrome = function (s) {
  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    const odd = expandFromCenter(s, i, i)
    const even = expandFromCenter(s, i, i + 1)
    const max = Math.max(odd, even)

    if (max > end - start) {
      start = Math.ceil(i - (max - 1) / 2)
      end = Math.floor(i + max / 2)
    }
  }

  function expandFromCenter(s, L, R) {
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--
      R++
    }
    return R - L - 1
  }

  return s.substring(start, end + 1)
}

console.log(longestPalindrome('babad'))
///
///
///
///
/// MANAKER ALGORITHM

//transform N-character string into 2N+1 character one
//word => |w|o|r|d|
const interleave = str => `|${str.split('').join('|')}|`

//return the result substring by the input string and calculated lengths
//canada, [0,1,0,1,0,3,0,1,0,3,0,1,0] -> ana
const getLongest = (str, pal) => {
  //Maximum palindrome's length and index
  const [length, index] = pal.reduce((max, x, i, arr) => (x > arr[max[1]] ? [x, i] : max), [0, 0]),
    startIndex = ((index - length) / 2) | 0

  return str.substring(startIndex, startIndex + length)
}

//Manacher's algorithm
//Longest Palindromic Substring
const findLongestPalindromicString = str => {
  const preprocessed = interleave(str),
    lengths = []

  //Center and end indexes for the current palindrome
  let center = 0,
    end = 0

  //getting the palindromes lengths array
  for (let i = 0, l = preprocessed.length; i < l; i++) {
    lengths[i] = end > i ? Math.min(end - i, lengths[center - (i - center)]) : 0

    // calculate length of ith palindrome
    while (preprocessed[i + 1 + lengths[i]] === preprocessed[i - 1 - lengths[i]]) {
      lengths[i]++
    }

    //reset palindrome center if there are no more intersections
    if (end < i + lengths[i]) {
      center = i
      end = i + lengths[i]
    }
  }

  return getLongest(str, lengths)
}
