'use strict';

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // Node list
//Static - does not update with page
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // Returns an html collection - a live collection of html elements

console.log(document.getElementsByClassName('.btn')); // Also returns an HTML collection

// Creating and inserting elements
// insertAdjacentHtml - preferred way (of author) to add elements

const message = document.createElement('div'); // At this point element does not appear on page - must be added
message.classList.add('cookie-message');
// message.textContent = 'Cookies are delicious and we offer special virtual cookies for your enjoyment.';
message.innerHTML =
  'Cookies are delicious and we offer special virtual cookies for your enjoyment. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message); // This one just moves the message we just prepended, it doesn't duplicate it.
// header.append(message.cloneNode(true)); // This one duplicates the message then adds it to the end.
// header.before(message); // Inserts before as a sibling
// header.after(message); // Inserts after as a sibling

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
