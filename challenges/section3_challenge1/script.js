// Calculate average score
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Compare average scores to determine the winner
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log('No team wins...');
    }
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

