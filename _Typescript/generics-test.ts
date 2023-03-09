type Entity1<T> = {
  prop: T
}

interface Entity<T> extends Entity1<undefined> {
  type: T
  name: string
}

function Test(entity: Entity<string>): boolean {
  return false
}

console.log(Test({ prop: undefined, type: 'sdsd', name: 'sdsfd' }))

// tt2
class Widget<T> {
  public value: T
}

class ArrayWidget<T> extends Widget<Array<T>> {
  setValue() {
    let v = new Array<T>()
    this.value = v // ok
  }
}

let aw = new ArrayWidget<string>()
aw.value = ['a', 'b', 'c']
