'use strict';

// //----------------------CALL AND APPLY METHODS--------------------
// //------------------------AND BIND METHOD-------------------------
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};
lufthansa.book(239, 'Sally Ride');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // no longer has "this" context - error

book.call(eurowings, 23, 'Sarah Williams'); // when using .call the first argument is the "this" context you want to use, then list arguments as normal
console.log(eurowings);

book.call(lufthansa, 239, 'Holly Ann'); // calls with Lufthansa again
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 123, 'Polly Pocket'); // calls with Swiss Air Lines
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // Acts like .call, but uses an array for the arguments of the method for the second argument
console.log(swiss);
//Used less commonly

// Call method with spread operator
book.call(swiss, ...flightData); // Acts like books.apply, except since you use the spread method you can just .call

// Bind method

const bookEW = book.bind(eurowings); // Binds this context permanently to a function that be used later
bookEW(23, 'Steven Williams');

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23); // Binds both this context and flight number permanently to function
bookEW23('Myself');
bookEW23('Sally Ride');
// Partial application: Part of the arguments are already assigned

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
  console.log(this);
};

document.body.append(document.createElement('button'));
document
  .querySelector('button')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // Sets a rate of 23%

console.log(addVAT(100));

const addVATCopy = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
console.log(addVATCopy(0.23)(200));
/////////////////////////////////////////////////////////////////

//----------------------FUNCTIONS RETURNING FUNCTIONS------------------
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Sally');
// greeterHey('Hannah');
// // Closures make this work, there are two other videos just on this topic. Will learn more later.

// greet('Hello')('Sally');

// const greetArrow = (greeting) => (userName) => {
//   console.log(`${greeting} ${userName}`);
// };

// greetArrow('Hiya')('Susan');
///////////////////////////////////////////////////

//------------- ACCEPTING CALLBACK FUNCTIONS----------------
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hi!');
// };

// // JS uses callbacks all the time
// document.body.addEventListener('click', high5); // high5 is a callback function

// ['Jonas', 'Martha', 'Adam'].forEach(high5); // high5 is also a callback function here

// // Callback functions allow us to use abstraction
// /////////////////////////////////////////////////

// ----------------FIRST-CLASS and HIGHER-ORDER FUNCTIONS-----------------
// JavaScript treats functions as first-class citizens
// You can pass functions as parameters or return them from other functions
// Higher-order function: A function that receives another function as an argument, that returns a new function, or both
// First-class functions: just means all functions are values - a feature of a progamming language
///////////////////////////////////////////

// //-----------PASSING ARUGMENTS--------------
// const flight = 'LH234';
// const jonas = {
//   name: 'Joann Schmidt',
//   passport: 2478236842638276478,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; // Doesn't change a primitive type
//   passenger.name = 'Mrs. ' + passenger.name; // DOES change the original of an object type

//   if (passenger.passport === 2478236842638276478) {
//     console.log('Checked in');
//   } else {
//     console.log('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas); //// Now that the passport number is changed the wrong passport message will be triggered

// // Javascript does NOT technically have pass by reference
// // Javascript passes the VALUE of the reference
// // In Python you can reassign the reference itself after it is passed and it will affect all uses of that object
// // In Javascript if you reassign the reference itself it will only affect the local scope and not the object as a whole
// ///////////////////////////////////////////////////

// -------------------DEFAULT PARAMETERS------------------
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;  // ES5 method

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 300);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // Use undefined to leave out paramaters out of order and use default
////////////////////////////////////////////////////////////////////
