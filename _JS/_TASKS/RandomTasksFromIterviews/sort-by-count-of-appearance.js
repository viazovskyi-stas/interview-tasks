// task: sort by appearance
const cars = ['mercedes', 'audi', 'lotos', 'audi', 'bmw', 'toyota', 'mazda', 'bmw']

let carsCount = {}
let uniqueCar = []

const sortByAppearance = array => {
  for (let i = 0; i < array.length; i++) {
    let current = cars[i]
    if (carsCount[current]) {
      carsCount[current] += 1
    } else {
      carsCount[current] = 1
      uniqueCar.push(current)
    }
  }
  // Object.keys(carsCount)
  return uniqueCar.sort((a, b) => carsCount[b] - carsCount[a])
}

console.log(sortByAppearance(cars))
