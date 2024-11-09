'use strict';

// // Objects in JavaScript

// // The only difference between a constructor function and a regular function is the new operator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a method inside a constructor function
//   // Would create a separate function in memory for each object
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const joanna = new Person('Joanna', 1991);
// console.log(joanna);

// const hanna = new Person('Hannah', 1992);
// console.log(hanna);

// // 1 - New empty object {} is created
// // 2 - Function is called, this keyword is the new empty object
// // 3 - {} empty object linked to prototype
// // 4 - function automatically returns new object {}

// const jack = new Person('Jack', 1975);
// console.log(jack);
// console.log(joanna instanceof Person);

// const jay = 'Jay';
// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// // Using prototype means there is only one copy of the function that all instances can use

// joanna.calcAge();
// hanna.calcAge();
// jack.calcAge();

// console.log(joanna.__proto__); // used to access the prototype of the object
// console.log(joanna.__proto__ === Person.prototype);
// // Person.prototype is not the prototype of person, but instead the prototype that will be used for all objected created with the Person constructor function

// console.log(Person.prototype.isPrototypeOf(joanna)); // True
// console.log(Person.prototype.isPrototypeOf(Person)); // False

// // When Person creates an object it points the proto property of the object at the prototype

// Person.prototype.species = 'Homo Sapiens'; // like setting a static variable
// console.log(joanna);
// console.log(joanna.species);

// console.log(joanna.hasOwnProperty('firstName'));
// console.log(joanna.hasOwnProperty('species')); // Since the property is on the prototype instead of the object this is false

// console.log(joanna.__proto__.__proto__); // Goes up prototype chain to Object prototype
// console.log(joanna.__proto__.__proto__.__proto__); // null - prototype of Object is null

// console.dir(Person.prototype.constructor); // Points back to itself (itself being Person constructor function)

// const arr = [3, 4, 2, 4, 5, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__); // Object

// // This is bad - don't extend built in objects due to likely conflicts later on
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir((x) => x + 1);
///////////////////////////////////////////////////////////////

// --------------------CLASSES----------------------------
// class expression
// const PersonSl = class {};

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // no commas between methods

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// // With this syntax we don't need to use PersonCl.prototype - is handled in background through syntactic sugar

// const jessica = new PersonCl('Jessica Davis', 1996);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();
// // You can still assign methods using prototype syntax if you want

// // REMEMBER
// // Classes are NOT hoisted
// // Classes are first class citizens
// // Classes are always executed in strict mode

// const walter = new PersonCl('Walter White', 1985);

// /////////////////////////////////////////////////////////////////////////////////

// //---------------GETTERS AND SETTERS----------------------

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);
/////////////////////////////////////////////////////////////

//----------------------STATIC METHODS----------------------------

// Array.from(document.querySelectorAll('h1'));
// // This is a static method that converts an array like object into an array

// // You can't use .from on an Array
// // [1, 2, 3].from();

// //.from is attached to Array not Array.prototype

// // Static methods are helpers that are related to a constructor

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const sally = new Person('Sally', 1992);

// Person.hey = function () {
//   console.log('Heyyyyyy!!!!');
//   console.log(this); // The constructor function is this, not any instance
// };

// // sally.hey(); // Doesn't work
// Person.hey(); // works

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // no commas between methods

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Set a static using Class syntax by using static keyword
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// PersonCl.hey();
////////////////////////////////////////////////////////////

//------------------OBJECT.CREATE------------------------

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// // Object.create is the least used way of creating objects

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2020);
// sarah.calcAge();

// // Object creates a new object using the prototype we provide
//////////////////////////////////////////////////////////////

//------------------Constructor Functions and Inheritance-------------------------

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// // Student.prototype = Object.create(Person.prototype);
// // This has to be set before adding methods because it would wipe out any methods already created.

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// // mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
//////////////////////////////////////////////////////

//-----------------------ES6 Classes and Inheritance---------------------------

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // no commas between methods

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Set a static using Class syntax by using static keyword
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Super always must be called first to create the context
//     // If no addition to super's constructor, do not need a constructor
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm just a baby, I'm ${this.age - 10}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();
/////////////////////////////////////////////////////////////////

//-------------------------Object.create and Inheritance-----------------------

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();
////////////////////////////////////////////////////////////////////////////////

//--------------Class Example----------------------

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     // protected by convention
//     this._movements = [];
//     this.local = navigator.language;

//     console.log(`Account is open. Thanks, ${this.owner}!`);
//   }

//   // Public interface
//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   // Underscore signifies this is a private method
//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // This is a bad idea. Access properties with methods, not directly.
// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// // console.log(acc1);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// console.log(acc1);

// console.log(acc1.pin);
////////////////////////////////////////////////////////////////

// ------------------------Class Fields (Official in 2022)-----------------------
class Account {
  // Public field
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected by convention
    // this._movements = [];
    // this.local = navigator.language;

    console.log(`Account is open. Thanks, ${this.owner}!`);
  }

  // Public methods - these haven't really changed
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('helping');
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1.#movements);

console.log(acc1);
// console.log(acc1.#approveLoan(100));  Throws an error
Account.helper();
/////////////////////////////////////////////////////////////////////

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// To chain return "this" in the method

console.log(acc1.getMovements());
