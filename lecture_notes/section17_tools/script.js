// Importing module

// import { addToCart, tq, totalPrice as price } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('importing module');

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);

// import add from './shoppingCart.js';
// add('pizza', 2);

// Don't actually do this - don't mix default and named exports in the same module
// import add, {
//   cart,
//   addToCart,
//   totalPrice as price,
//   tq,
// } from './shoppingCart.js';
// add('cat treat', 100);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// console.log('Start fetching');
// const response = await fetch('https://jsonplaceholder.typicode.com/todos');
// const data = await response.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();

// // lastPost.then((last) => console.log(last));
// console.log(lastPost);

// prettier-ignore
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product}s added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product}s ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);

// import cloneDeep from "/node_modules/lodash-es/cloneDeep.js";

import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(JSON.stringify(stateClone));

const stateDeepClone = cloneDeep(state);
console.log(JSON.stringify(stateDeepClone));
state.user.loggedIn = false;
console.log(JSON.stringify(stateClone));
console.log(JSON.stringify(stateDeepClone));

if (module.hot) {
  module.hot.accept();
}
