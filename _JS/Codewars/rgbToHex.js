function rgb(r, g, b) {
  const convertHex = num => {
    if (num < 0) {
      num = 0
    }
    if (num > 255) {
      num = 255
    }
    const hex = parseInt(num).toString(16).toUpperCase()
    return hex.length === 1 ? '0' + hex : hex
  }
  return `${convertHex(r)}${convertHex(g)}${convertHex(b)}`
}
console.log(rgb(255, 255, 333))

function rgbToHex(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2)
    })
    .join('')
    .toUpperCase()
}

console.log(rgbToHex(0, 51, 255)) // #0033ff
