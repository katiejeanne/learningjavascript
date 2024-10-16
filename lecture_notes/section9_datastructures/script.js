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

const rest1 = {
  name: 'Capri',
  //   numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piezze',
  owner: 'Guy',
};

// OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10; // Returns num guests from 1 if exists, otherwise 10
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // Does same as above - is same number if it exists, otherwise sets to 10.  WILL TREAT 0 AS FALSY
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10; // Now only treats NULLISH as falsy, ignores 0 or empty string
rest2.numGuests ??= 10;

// AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // Returns first falsy value, so if there is a value it sets it to what you say, but if there isn't one it leaves it alone.
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

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
