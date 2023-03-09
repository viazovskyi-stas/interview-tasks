// https://codereview.stackexchange.com/questions/208854/return-true-if-a-portion-of-one-string-can-be-rearranged-to-create-the-other-str
function scramble(str1, str2) {
  const cache = {}
  for (let i = 0; i < str2.length; i++) {
    const char = str2.at(i)
    if (cache.hasOwnProperty(char)) {
      cache[char]++
    } else {
      cache[char] = 1
    }
  }
  for (let i = 0; i < str1.length; i++) {
    const char = str1.at(i)
    if (cache.hasOwnProperty(char) && cache[char] !== 0) cache[char]--
  }

  return !Object.values(cache).find(el => el !== 0)
}

// alternative
// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }

console.log(scramble('cedewaraaossoqqyt', 'codewars'))
