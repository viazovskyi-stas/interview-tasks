function test() {
  this.n = 1
  console.log(this.n)
  return () => {
    this.n++
    console.log('zzz')
  }
}

function* makeRangeIterator(start = 0, end = 100, step = 1) {
  let iterationCount = 0
  for (let i = start; i < end; i += step) {
    iterationCount++
    yield i
  }
  return iterationCount
}

const counter = makeRangeIterator()
const nextVal = () => counter.next().value

console.log('nextVal: ', nextVal()) // 0
console.log('nextVal: ', nextVal()) // 1
console.log('nextVal: ', nextVal()) // 2
console.log('nextVal: ', nextVal())

const countTimesCalled = () => {
  if (!this.count) {
    this.count = 0
  }

  return ++this.count
}

console.log(countTimesCalled())
console.log(countTimesCalled())
console.log(countTimesCalled())
