const tree = {
  value: 3,
  left: {
    value: 10,
    left: {
      value: 4,
    },
    right: {
      value: 77,
    },
  },
  right: {
    value: 10,
    right: {
      value: 22,
      right: {
        value: 2,
      },
    },
  },
}

function sumTree(tree) {
  this.sum = 0
  ;(function recursiveStep(tree) {
    if (tree.value) {
      this.sum += tree.value
    } else {
      return new Error('No value')
    }
    if (tree.left) {
      recursiveStep(tree.left)
    }
    if (tree.right) {
      recursiveStep(tree.right)
    }
  }.bind(this)(tree))

  return this.sum
}

function sumTree1(tree) {
  let count = tree.value
  if (tree.left) {
    count += sumTree1(tree.left)
  }
  if (tree.right) {
    count += sumTree1(tree.right)
  }
  return count
}

console.log(sumTree(tree))
console.log(sumTree1(tree))
