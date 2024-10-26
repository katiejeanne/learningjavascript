'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//--------------------- ARRAY METHODS ------------------------

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(arr.slice()); // Creates a shallow copy of the array
// console.log([...arr]); // Also creates a shallow copy of the array

// // SPLICE
// // console.log(arr.splice(2)); // DOES mutate original array, usually used to delete elements from an array
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2); // The reverse method changes the original array - not a copy!

// // CONCAT
// const letters = arr.concat(arr2); // Does NOT mutate original array
// console.log(letters);
// console.log(...arr, ...arr2);

// // JOIN
// console.log(letters.join(' - '));
////////////////////////////////////////////////////////////////////

// ------------------------------ THE AT METHOD --------------------------
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); // This and last do the same thing

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]); // Ways of getting the last element in an array
// console.log(arr.at(-1));

// console.log('jonas'.at(-1)); // also works on strings
/////////////////////////////////////////////////////////////////

// ------------------------- FOR EACH -------------------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   // 1st - index, 2nd - element
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----- FOR EACH -----');
// movements.forEach(function (movement, i, arr) {
//   // 1st - current element, 2nd - current index, 3rd - current array
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// ForEach will ALWAYS iterate over entire array
// Break and Continue do not work in forEach.
//////////////////////////////////////////////////////////////////

// ---------------------FOR EACH WITH MAPS AND SETS----------------------

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// // keeps the "key" parameter even though it isn't relevant for a Set for consistency

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

//--------------- REDUCE ---------------------
// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// // Second argument of reduce is the initial value of the accumulator
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balanceArr);

// Maximum value
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(max);

///////////////////////////////////////////////////

// -----------------CHAINING METHODS------------------
// const eurToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr); // use the array input for debugging chained methods
//     return mov * eurToUsd;
//   })
//   // .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

//////////////////////////////////////////////

// --------------------SOME AND EVERY----------------------
// console.log(movements);

// // Equality
// console.log(movements.includes(-130));

// // Specify a condition
// console.log(movements.some((mov) => mov === -130));

// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// // EVERY
// // Only returns true if EVERY element is true
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// // Separate callback
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
// //////////////////////////////////////////////////////////////

//-------------------------FLAT AND FLATMAP-----------------------
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// // Only flattens one level by default, can specify more than 1
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//   const overallBalanceChained = accounts
//     .map((acc) => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
//   console.log(overallBalanceChained);

//   // Flat Map combines flat and map together

//   const overallBalanceFlatMap = accounts
//     .flatMap((acc) => acc.movements)
//     .reduce((acc, mov) => acc + mov);
//   console.log(overallBalanceFlatMap);
/////////////////////////////////////////////////////////////////

//---------------------SORT------------------------
// const owners = ['Jonas', 'Helen', 'Sally', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);
// console.log(movements.sort()); //By default .sort always sorts as strings (alphabet order)
// // movements.sort((a, b) => {
// //   if (a > b) return 1; // return a positive value - keep order
// //   if (b > a) return -1; // return a negative value - switch order
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);
//////////////////////////////////////////////////////////////////

//-----------------------CREATING AND FILLING ARRAYS----------------------
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7); // Makes empty * 7 - can't use map to fill, only .fill
// console.log(x);
// // x.fill(1) // Fill entire array with 1s
// // x.fill(1, 3) // Fill entire array with 1s starting at index 3
// x.fill(1, 3, 5); // Fill with ones starting at index 3 ending at index 5
// console.log(x);

// arr.fill(23, 4, 6); // Fill with 23 starting at index 4 and ending at index 6
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1); // acheives the same as making an empty array then using .fill to fill it
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1); // fills with consecutive numbers
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     (el) => el.textContent.replace('€', '')
//   );

//   console.log(movementsUI);
// });
// Result of query list is a node list, which is not an array, but an array like structure
//Array.from then creates a real array with the node list
// Also allows you to apply a map function, which you could do with a simple spread inside brackets (which also could make an array)
