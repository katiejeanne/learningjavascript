'use strict';

// The only difference between a constructor function and a regular function is the new operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // Would create a separate function in memory for each object
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const joanna = new Person('Joanna', 1991);
console.log(joanna);

const hanna = new Person('Hannah', 1992);
console.log(hanna);

// 1 - New empty object {} is created
// 2 - Function is called, this keyword is the new empty object
// 3 - {} empty object linked to prototype
// 4 - function automatically returns new object {}

const jack = new Person('Jack', 1975);
console.log(jack);
console.log(joanna instanceof Person);

const jay = 'Jay';
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// Using prototype means there is only one copy of the function that all instances can use

joanna.calcAge();
hanna.calcAge();
jack.calcAge(); 

console.log(joanna.__proto__); // used to access the prototype of the object
console.log(joanna.__proto__ === Person.prototype);
// Person.prototype is not the prototype of person, but instead the prototype that will be used for all objected created with the Person constructor function

console.log(Person.prototype.isPrototypeOf(joanna)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False

// When Person creates an object it points the proto property of the object at the prototype

Person.prototype.species = 'Homo Sapiens'; // like setting a static variable
console.log(joanna);
console.log(joanna.species);

console.log(joanna.hasOwnProperty('firstName'));
console.log(joanna.hasOwnProperty('species')); // Since the property is on the prototype instead of the object this is false

console.log(joanna.__proto__.__proto__); // Goes up prototype chain to Object prototype
console.log(joanna.__proto__.__proto__.__proto__); // null - prototype of Object is null

console.dir(Person.prototype.constructor); // Points back to itself (itself being Person constructor function)

const arr = [3, 4, 2, 4, 5, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // Object

// This is bad - don't extend built in objects due to likely conflicts later on
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir((x) => x + 1);
