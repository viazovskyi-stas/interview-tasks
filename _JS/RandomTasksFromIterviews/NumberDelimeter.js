const addDelimiter = inputString => {
  // return inputString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") // fastest
  return Number(inputString).toLocaleString('ES-es')
}

console.log(addDelimiter(100000000))
