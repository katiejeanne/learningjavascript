'use strict';

const printForecast = function (arr) {
  let tempPrintout = '...';
  for (let i = 0; i < arr.length; i++) {
    tempPrintout += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(tempPrintout);
};

const data1 = [17, 21, 23];
printForecast(data1);

const data2 = [12, 5, -5, 0, 4];
printForecast(data2);
