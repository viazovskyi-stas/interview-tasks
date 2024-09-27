for (var i = 0; i < 5; i++) {
  console.log(i)
  setTimeout(() => {
    console.log('timeout', i)
  }, 100)
}
