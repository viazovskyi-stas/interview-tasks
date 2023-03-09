const mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
const o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // переменная o связана с другим объектом, поэтому данная строка также сработает

mySet.has(1); // true
mySet.has(3); // false, 3 не было добавлено в set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // удаляет 5 из set
mySet.has(5);    // false, 5 было удалено

mySet.size; // 4, было удалено одно значение
console.log(mySet); // Set {1, 'some text', Object {a: 1, b: 2}, Object {a: 1, b: 2}}