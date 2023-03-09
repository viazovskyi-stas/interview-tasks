const testArrayCount = 5000000

console.time('usual insert')
const mockArray = Array(testArrayCount)
mockArray.splice(2, 0, 1)
console.timeEnd('usual insert')
console.log('usual insert output', mockArray)

class HashTable {
  constructor() {
    this.values = Array(testArrayCount)
    this.length = testArrayCount
    this.size = testArrayCount
  }

  calculateHash(key) {
    return key.toString().length % this.size
  }

  add(key, value) {
    const hash = this.calculateHash(key)
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {}
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++
    }
    this.values[hash][key] = value
  }

  search(key) {
    const hash = this.calculateHash(key)
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key]
    } else {
      return null
    }
  }
}

console.time('hash insert')
const ht = new HashTable()
//add data to the hash table ht
ht.add('3', '300')
console.timeEnd('hash insert')
console.log('hash insert output', ht)
