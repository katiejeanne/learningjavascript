function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}

console.log(calcTip(100));

bills = [125, 555, 44];
totals = [125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44)];



