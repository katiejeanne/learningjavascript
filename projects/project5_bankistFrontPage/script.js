'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //   console.log(s1coords); // Gets DOMRect for section 1
  //   console.log(e.target.getBoundingClientRect()); // Get DOM rect for the learn more/scroll link, relative to viewport
  //   //   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);  .pageXOffset & pageYOffset out of date - use .scrollX and .scrollY instead.
  //   console.log('Current scroll (X/Y): ', window.scrollX, window.scrollY);

  //   console.log(
  //     'height/width viewport',
  //     document.documentElement.clientHeight,
  //     document.documentElement.clientWidth
  //   );

  //Scrolling
  //   window.scrollTo(
  //     s1coords.left + window.scrollX,
  //     s1coords.top + window.scrollY
  //   );

  //   window.scrollTo({
  //     left: s1coords.left + window.scrollX,
  //     top: s1coords.top + window.scrollY,
  //     behavior: 'smooth',
  //   });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log('LINK');
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// We added one event handler to the parent element to handle all the events and avoid creating extra events
// Also good for elements not on page at load time

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause - return immedidately if null
  if (!clicked) return;

  // Make all tabs inactive before making active tab active
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// Using scroll is inefficient because it constantly fires.

// Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.05],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// section1.style.backgroundColor = 'orangered';

const header = document.querySelector('.header');
// header.style.backgroundColor = 'orangered';
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
