'use strict';

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1

for (const [goalNum, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNum + 1}: ${playerName}`);
}

// 2

let totalOdds = 0;
for (const oddValue of Object.values(game.odds)) {
  totalOdds += oddValue;
}
console.log(totalOdds / 3);

// 3
for (const [oddKey, oddValue] of Object.entries(game.odds)) {
  const outputStr = `Odd of ${
    game[oddKey] ? `victory ${game[oddKey]}` : 'draw'
  }: ${oddValue}`;
  console.log(outputStr);
}

// 4
const scorers = {};
const playersScored = [...new Set(game.scored)];
for (const name of playersScored) {
  const scoreCount = game.scored.reduce(
    (acc, player) => (name === player ? acc + 1 : acc),
    0
  );
  scorers[name] = scoreCount;
}
console.log(scorers);
