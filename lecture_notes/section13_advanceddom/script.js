'use strict';

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section'); // Node list
// //Static - does not update with page
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); // Returns an html collection - a live collection of html elements

// console.log(document.getElementsByClassName('.btn')); // Also returns an HTML collection

// // Creating and inserting elements
// // insertAdjacentHtml - preferred way (of author) to add elements

// const message = document.createElement('div'); // At this point element does not appear on page - must be added
// message.classList.add('cookie-message');
// // message.textContent = 'Cookies are delicious and we offer special virtual cookies for your enjoyment.';
// message.innerHTML =
//   'Cookies are delicious and we offer special virtual cookies for your enjoyment. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message); // This one just moves the message we just prepended, it doesn't duplicate it.
// // header.append(message.cloneNode(true)); // This one duplicates the message then adds it to the end.
// // header.before(message); // Inserts before as a sibling
// // header.after(message); // Inserts after as a sibling

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);
// // We can only access the in line styles in this way that we have set programatically

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// const newHeight =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';
// console.log(newHeight);
// message.style.minHeight = newHeight;
// // When I set height nothing happened, so I changed minHeight instead and it worked.

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Cool logo';
// console.log(logo.alt);

// // Non-standard attribute
// // This is getting an attribute we set in the html
// console.log(logo.designer); // returned undefined because is not a standard element
// console.log(logo.getAttribute('designer')); // returns set value

// logo.setAttribute('company', 'Bankist'); // Can also set an attribute programatically
// console.log(logo.getAttribute('company'));

// console.log(logo.src); // returns url
// console.log(logo.getAttribute('src')); // returns actual
// // Two approaches return different results

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));
// // Also returns two different results

// // Data attributes
// console.log(logo.dataset.versionNumber);
// // Gets attributes that start with "data" using camel case (so attribute in the html is "data-version-number")

// // Classes - 4 methods for editing
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // DON'T DO THE FOLLOWING
// logo.className = 'classname'; // removes all classes and sets a single class, the one you've given

// ------------SMOOTH SCROLLING------------
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords); // Gets DOMRect for section 1
//   console.log(e.target.getBoundingClientRect()); // Get DOM rect for the learn more/scroll link, relative to viewport
//   //   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);  .pageXOffset & pageYOffset out of date - use .scrollX and .scrollY instead.
//   console.log('Current scroll (X/Y): ', window.scrollX, window.scrollY);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   //Scrolling
//   //   window.scrollTo(
//   //     s1coords.left + window.scrollX,
//   //     s1coords.top + window.scrollY
//   //   );

//   //   window.scrollTo({
//   //     left: s1coords.left + window.scrollX,
//   //     top: s1coords.top + window.scrollY,
//   //     behavior: 'smooth',
//   //   });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: Great! You scrolled over the heading.');
// // }); // Preferred, more modern way, allows adding multiple listeners

// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great! You scrolled over the heading.');
// // }; // Older way of setting events

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You scrolled over the heading.');

//   //   h1.removeEventListener('mouseenter', alertH1);
//   // Removes event listener so it only happens once
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // DON'T DO THIS You can also specify directly in html like so:
// // <h1 onclick="alert('HTML alert')">
// // h1 contents
// // </h1>
// //////////////////////////////////////////////

//----------EVENT PROPAGATION-------------------

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);

//   //   e.stopPropagation(); // Prevents event from reaching parents
//   // Not a good idea to stop propagation in practice as it can have unintended consequences
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
// });

// // demonstrates how the same event also happens in the parent elements - clicking triggers both the immediate class and parent class and both their events

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Link', e.target, e.currentTarget);
//   },
//   true
// );
// Adding the true means it is going in the capturing phase, not really useful in modern javascript

// e.target (where e is event) is always going to point to the event originator, even if it is triggering additional events in parents
// e.currentTarget points to the current element doing the event
//////////////////////////////////////////////

// -------------DOM TRAVERSING-------------------

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sidways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
