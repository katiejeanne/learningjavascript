'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((indName) => indName[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (account) {
  // Display movements
  displayMovements(account.movements);

  // Display balance
  calcDisplayBalance(account);

  // Display summary
  calcDisplaySummary(account);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('Successful close');

    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  console.log(accounts);
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
