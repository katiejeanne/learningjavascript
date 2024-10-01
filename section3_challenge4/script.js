// Store bills, tips and totals in an array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// The tip is 15% if the total is between 50 and 300, otherwise the tip is 20%.
function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}

// Populate tips and totals
for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}


// Find the average of an array
const calcAverage = function (arr) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

console.log(calcAverage(totals));
