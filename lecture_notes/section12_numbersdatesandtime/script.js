'use strict';

//------------------------MATH AND ROUNDING---------------------------
// console.log(23 === 23.0);

// // Base 10 - 0 to 9
// // Binary base 2 - 0 1  Numbers like 0.1 very hard to represent in binary
// // Cannot do precise financial calculations in javascript
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// //Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10)); // Doesn't work - must start with a number

// console.log(Number.parseFloat('2.5rem')); // Will take the whole float
// console.log(Number.parseInt('2.5rem')); // Will just take the first integer

// // Check if is specifically "NaN"
// console.log(Number.isNaN(20)); // False - it is a number
// console.log(Number.isNaN('20')); // False - it is a number
// console.log(Number.isNaN(+'20x')); // True - it can't convert to anumber
// console.log(Number.isNaN(23 / 0)); // False - it isn't NaN, it's inifity

// //isFinite is preferred to check if value is a number and not a string
// console.log(Number.isFinite(20)); // True - it is a number
// console.log(Number.isFinite('20')); // False - it is a string
// console.log(Number.isFinite(+'20x')); // False - it isn't a number
// console.log(Number.isFinite(20 / 0)); // False - it's isn't finite

// console.log(Number.isInteger(23)); // True
// console.log(Number.isInteger(23.0)); // Also true - it is an integer even if it's written with decimal

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// console.log(Math.trunc(23.9)); // Always removes entire decimal part
// console.log(Math.round(23.9)); // Rounds to nearest integer
// console.log(Math.ceil(23.9)); // Always rounds up to next int
// console.log(Math.floor(23.9)); // Always rounds down to smaller num

// // .trunc and .floor are different with negative numbers - trunc removes decimal but floor will take it to smaller negative number which changes number
// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding floating point numbers
// console.log((2.7).toFixed(0)); // RETURNS STRING, goes to specified precision
// console.log((2.7).toFixed(3));
// console.log(+(2.7).toFixed(3)); // Adding + changes back to a number
/////////////////////////////////////////////////////////////////////

//--------------------REMAINDER OPERATOR - MODULO--------------------------
// console.log(5 % 2);
// console.log(5 / 2);

// console.log(8 % 3);
// console.log(8 / 3);

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
////////////////////////////////////////////////

//-----------------NUMBER SEPARATORS---------------------

// // 287,460,000,000
// const diameter = 287_460_000_000; // Underscores can stand as numeric separators - will ignore the underscores
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee1 = 15_00;
// const transferfee2 = 1_500; // Both are read as the same number

// // Cannot put _ at beginning or end or next to decimal

// console.log(Number('230000000'));
// console.log(Number('23_000000')); // Cannot parse underscores from a string, only from number data type
// /////////////////////////////////////////////////////////

//--------------------BIGINT-------------------------------

console.log(2 ** 53 - 1); // The biggest integer javascript can store
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // This number is not safe - uses tricks to sometimes work but they can't be trusted

console.log(394659837469857639847658374659876384765968976n); // Adding n tells javascript to use bigint
console.log(BigInt(394659837469857639847658374659876384765968976)); // NOTE THAT THIS ISN'T SAFE because it first takes this giant number as a regular int before feeding it into the function - use BigInt on smaller numbers to then create bigger numbers

//Operations
console.log(100000n + 100000n); // Operators work the same
console.log(38746387648368746837n * 100000000n);

// Can't use math functions on bigint
// console.log(Math.sqrt(16n)); // ERROR - doesn't work

// Can't mix types in functions - this is where to use BigInt
const huge = 2384672638746287634n;
const num = 23;
// console.log(huge * num); // ERROR - doesn't work
console.log(huge * BigInt(num));

// Comparators can handle different types
console.log(20n > 15); // True - comparisons are okay
console.log(20n === 20); // false - types are different
console.log(typeof 20n); // bigint
console.log(20n == 20); // true - uses type coercion

// concats can handle bigint
console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(10n / 3n); // Returns the closest int (cuts off decimal)
console.log(10 / 3); // 3.333
