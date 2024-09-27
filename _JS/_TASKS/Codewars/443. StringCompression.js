function largestAltitude(gain) {
    const altitudes =gain.reduce((acc, item) => {
        acc.push(acc.at(-1) + item)
        return acc
    }, [0])
    return Math.max(...altitudes)
}
console.log(largestAltitude([-5,1,5,0,-7]))

console.log(Boolean([]))