// Без нахлеста. Строго целые плитки:

// const nTiles = (w, h, a) => {
//   return Math.floor(w / a) * Math.floor(h / a)
// }
// console.log(nTiles(6, 6, 4)) // 1
// console.log(nTiles(9, 12, 4)) // 6

// С нахлестом:

const nTiles = (w, h, a) => {
  return Math.ceil(w / a) * Math.ceil(h / a)
}
console.log(nTiles(6, 6, 4)) // 4
console.log(nTiles(9, 12, 4)) // 9
