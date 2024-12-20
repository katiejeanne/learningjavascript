'use strict';

// URL for API https://countries-api-836d.onrender.com/countries/ (instead of https://restcountries.eu/rest/v2/)
const rootURL = 'https://countries-api-836d.onrender.com/countries/';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   // Old way of using ajax calls
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();
//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('taiwan');
// getCountryData('usa');
// getCountryData('germany');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country 2
//     const neighbor = data.borders?.[0];

//     if (!neighbor) return;

//     // AJAX call country 1
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('usa');
// getCountryAndNeighbor('taiwan');
// getCountryAndNeighbor('kazakhstan');

// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// );
// request.send();

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );
// console.log(request);

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = 'potato'; // data[0].borders[0];

//       if (!neighbor) return;

//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
//       );
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, 'neighbor'))
//     .catch((err) => {
//       console.log(`${err} 🍫🍌`);
//       renderError(`Something went wrong. 😇 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error('No neighbor found!');

      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.log(`${err} 🍫🍌`);
      renderError(`Something went wrong. 😇 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('taiwan');

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then((res) => console.log(res));
// Promise.resolve('Resolved promise 2').then((res) => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// Promise takes exactly one argument, which is the executor function
// The executor function takes two arguments - resolve and reject which are functions
//

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );  Same as below
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

// const whereAmI = function (lat, long) {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: long } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch((error) => console.log(error));
// };

// btn.addEventListener('click', whereAmI);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: long } = position.coords;

    const countryData = await fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json`
    );
    if (!countryData.ok) throw new Error('Problem getting location data.');
    const dataGeo = await countryData.json();

    const response = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );
    const data = await response.json();
    renderCountry(data[0]);

    // return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    return dataGeo.city;
  } catch (err) {
    console.log(err);
    renderError(`Ooogly boooogly`);

    // Reject promise returned from async function
    throw err;
  }
};

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.error())
//   .finally(() => console.log('3: Finished getting location'));
// // console.log('3: Finished getting location');

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.log(`2: ${err.message}`);
  } finally {
    console.log('3: finished getting location');
  }
});

//Async await is syntactic sugar over promises &  then statements

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    //     const [data1] = await getJSON(
    //       `https://countries-api-836d.onrender.com/countries/name/${c1}`
    //     );
    //     const [data2] = await getJSON(
    //       `https://countries-api-836d.onrender.com/countries/name/${c2}`
    //     );
    //     const [data3] = await getJSON(
    //       `https://countries-api-836d.onrender.com/countries/name/${c3}`
    //     );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
