const multiplyByTwo = (...rest) => {
    const output = rest.map(i => i * 2)
    console.log(output)
}
multiplyByTwo(1, 2, 3, 4, 5, 6) // output [2, 4, 6, 8, 10, 12]

