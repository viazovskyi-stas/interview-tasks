const keySequence = 'car.test.big.read'

const keySequence1 = 'default.test.big.read'

const testObj = {
  car: {
    test: {
      big: {
        read: 'yes',
      },
    },
  },
}

const testObj1 = {
  default: {
    test: {
      big: {
        big: 'zzz',
      },
    },
  },
}

// get last by map

function get(keySequence, nestedObj) {
  const keys = keySequence.split('.')
  let targetValue = null

  keys.reduce((acc, current, index) => {
    if (acc.hasOwnProperty(current)) {
      if (keys.length === index + 1) {
        targetValue = acc[current]
      }
      return (acc = acc[current])
    }
  }, nestedObj)

  return targetValue
}

console.log(get(keySequence1, testObj1))
