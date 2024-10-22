'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ------------------WORKING WITH STRINGS------------------
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); // returns character at location
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]); // returns character at location of given string

// console.log(airline.length); // returns length of string
// console.log('B737'.length);

// console.log(airline.indexOf('r')); // Postion of FIRST occurence of character
// console.log(airline.lastIndexOf('r')); // position of LAST occurence of character
// console.log(airline.indexOf('portugal')); // Returns -1 if it doesn't exist; Also CASE SENSITIVE

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); // Always length is end minus beginning, with first number being firs letter

// console.log(airline.slice(0, airline.indexOf(' '))); // Get the first word (cut off at first space)
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Get the last word (cut off up to last space)

// console.log(airline.slice(-2)); // Negative values count back from end of string
// console.log(airline.slice(1, -1)); // Remove the first and last letter

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You have a middle seat.');
//   else console.log('You have an outside seat');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas')); // Strings are primitive types in Javascript so it boxes the string as an object, then when the operation is done it turns it back into a string primitive.

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim(); // All in one
// console.log(normalizedEmail);

// // replacing
// const priceGB = '288,97L';
// const priceUS = priceGB.replace('L', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'Flight 1111111 now boarding at door 23. Please report to door 23.';

// console.log(announcement.replace('door', 'gate')); // Only replaces first occurrence
// console.log(announcement.replaceAll('door', 'gate')); // Replaces all (new)
// console.log(announcement.replace(/door/g, 'gate')); // Uses regex to replace all

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Air')); // true

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   // Checks if both start and end matches to see if plane belongs to new Airbus family
//   console.log('Part of the new Airbus family.');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase(); // converts to lower case to make comparison easier
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board.');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun.');

console.log('a+very+nice+string'.split('+'));
console.log('Hot Potato'.split(' '));

const [firstName, lastName] = 'Hot Potato'.split(' ');

const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(fullName);

const capitalizeName = function (name) {
  const names = name.trim().split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // Acheives same effect using replace instead of slice
  }
  console.log(namesUpper.join(' '));
};

capitalizeName(' jessica ann smith davis');
capitalizeName('little miss muffet');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Habakkuk'.padStart(20, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // Converts to string by adding empty string and forcing coercion
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(926349875629348));
console.log(maskCreditCard('34983798273947'));

// Repeat
const message2 = 'Bad weather. All departures delayed. ';
console.log(message2.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'->'.repeat(n)}`);
};
planesInLine(5);
planesInLine(2);
planesInLine(12);
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /

//----------------------MAPS------------------
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal')); // The set method returns the new complete math object

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23) // you can chain sets one after the other like this
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(11)); // If key does not exist "undefined" is returned

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear(); Clear out all data from Map
// console.log(rest);
// console.log(rest.size);

// rest.set([1, 2], 'Test'); // [1,2] the array is a particular object
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2])); // Does not return Test because they are not the same object

// const arr = [1, 2]; // Now the object is defined on its as an object
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr)); // Now we can use the object itself as the key and it works

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// // Now you can reference dom object using the value.

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to a map
// console.log(Object.entries(restaurant));
// const hoursMap = new Map(Object.entries(restaurant));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = prompt('Your answer');

// console.log(question.get(answer == question.get('correct'))); // Here we have nested a logical comparison inside another get so it goes right to getting the response to true or false.

// //Conver map to array
// console.log([...question]);
// console.log([...question.keys()]); // Can also get keys and values from a map like you would from an object
// console.log([...question.values()]);
// /
// /
// /
// /
// /
// /
// /
// /

//----------------SETS--------------------
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
// console.log(ordersSet);

// console.log(new Set('Name'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// console.log(ordersSet[0]); // There are no indexes or order
// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Watier', 'Chef', 'Watier', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const staffUniqueArray = [...new Set(staff)]; // takes an array, makes a set then turns it back to an array, removes duplicates
// console.log(staffUniqueArray);
// const numPostions = new Set(staff).size; // Just gets the size or number of unqiue values without saving a new array
// console.log(numPostions);
// const numLetters = new Set('This is a sentence with many duplicate letters.')
//   .size; // Sets can also be made from strings.
// console.log(numLetters);
// /
// /
// /
// /
// /
// /

// // ------------LOOPING OBJECTS-----------------
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// // Property VALUES

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entries return the index number and the element itself.
// // On objects use Object.entries(objectName)
// // Returns the key then the VALUE

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// /
// /
// /
// /
// /

// --- OPTIONAL CHAINING -----

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // WITH OPTIONAL CHAINING - only if the property before the question exists will the following property be read, otherwise it will return undefined. Otherwise would return a reference error.
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Sally', email: 'email@email.com' }];
// console.log(users[0]?.name ?? 'User array empty');
// /
// /
// /
// /

// const rest1 = {
//   name: 'Capri',
//   //   numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piezze',
//   owner: 'Guy',
// };

// OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10; // Returns num guests from 1 if exists, otherwise 10
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // Does same as above - is same number if it exists, otherwise sets to 10.  WILL TREAT 0 AS FALSY
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10; // Now only treats NULLISH as falsy, ignores 0 or empty string
// rest2.numGuests ??= 10;

// AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // Returns first falsy value, so if there is a value it sets it to what you say, but if there isn't one it leaves it alone.
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // NULLISH COALESCING OPERATOR

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined but not 0 or ''
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // LOGICAL OPERATORS:
// // - Can use any data type
// // - Can return ANY data type
// // - Short circuiting
// console.log(3 || 'Jonas');
// // In the above example, since 3 is true, and the operator is OR, it doesn't even look at the second value 'Jonas'.
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // It's not asking for true false, so it just returns the first truthy value.

// // restaurant.numGuests = 23;
// // More lengthy ternary operator:
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // Use short circuiting instead:
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // CAUTION: If valid number is 0 it will be treated as falsy because 0 is falsy

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// // When && is used then the first is the test and if its falsy the falsy is returned, if its truthy then the second value is returned. This is trippy.

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // Don't use this as default because it makes code hard to read

// // DESTRUCTURING

// //On right side of equals sign ... = SPREAD
// const arr = [1, 2, ...[3, 4]];

// //On LEFT side of equals sign ... = REST
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   // Does NOT include skipped elements
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //There can only be ONE Rest in each destructuring assignment

// // OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 3, 6, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('shrooms');

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy array - shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(combinedMenu);

// // Iterables are arrays, strings, maps, but NOT objects
// const str = 'Jonnas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Salk`);  Spread can't be used when it's not expected

// // Deconstructing an array
// const ingredients = [
//   //   prompt("Let's make pasta! Ingredient 1?"),
//   //   prompt('Ingredient 2?'),
//   //   prompt('Ingredient 3?'),
//   1, 2, 3,
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Good';
// console.log(restaurantCopy);
// console.log(restaurant);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '22 Baker Street',
//   starterIndex: 1,
// });

// const { name: restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);

// const { name: restName, openingHours: hours, categories: tags } = restaurant;
// console.log(restName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 99;
// const obj = { a: 23, b: 7, c: 14 };
// // If destructuring an object, you can't start with { so you can wrap it in ()
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// console.log(restaurant.order(2, 0));
// const [starter, mainDish] = restaurant.order(2, 0);
// console.log(starter, mainDish);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// // Destructuring nested nested
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
