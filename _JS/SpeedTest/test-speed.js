console.time("each")
Array(10).forEach( () => {
  setTimeout(() => {}, 1000)
})
console.timeEnd("each")

console.time("each 1")
Array(10).forEach(async () => {
  await setTimeout(() => {}, 1000)
})
console.timeEnd("each 1")