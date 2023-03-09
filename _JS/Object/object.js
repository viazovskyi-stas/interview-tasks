const person1 = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
}

Object.seal(person1)
// With Object.seal we can prevent new properties from being added,
// or existing properties to be removed.
// However, you can still modify the value of existing properties.
Object.freeze(person1)
// The Object.freeze method freezes an object.
// No properties can be added, modified, or removed.
// However, it only shallowly freezes the object,
// meaning that only direct properties on the object are frozen.
// If the property is another object, like address in this case,
// the properties on that object aren't frozen, and can be modified.

const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
}

const person = new Proxy({}, handler)

person.name = 'Lydia'
person.name

// With a Proxy object, we can add custom behavior
// to an object that we pass to it as the second argument.
// In this case, we pass the handler object which contained two properties:
// set and get. set gets invoked whenever we set property values,
// get gets invoked whenever we get (access) property values
