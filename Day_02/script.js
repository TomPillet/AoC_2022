var fs = require('fs');
const input = fs.readFileSync('/home/tompillet/Documents/0 - Coding/AOC/Day_02/input.txt', 'utf-8');

// ROCK = A, X      - it equals to 1 point
// SCISSORS = B, Y  - it equals to 2 points
// PAPER = C, Z     - it equals to 3 points
// A win equals to 6 points, a draw equals to 3, and a loose equals to 0

// PART ONE
const rules = {
    scoreTransform: {
        
        'X' : 1,
        'Y' : 2,
        'Z' : 3,

    },

    roundResult: {

        'A X' : 3,
        'A Y' : 6,
        'A Z' : 0,
    
        'B X' : 0,
        'B Y' : 3,
        'B Z' : 6,
    
        'C X' : 6,
        'C Y' : 0,
        'C Z' : 3,

    }
}

const gameOne = input.split(/\n/);
const rounds = gameOne.map(round => {
    const roundResult = rules.roundResult[round];
    const playScore = rules.scoreTransform[round[2]];
    
    return roundResult + playScore;
});
let gameResult = rounds.reduce((a,c) => a+c, 0);
console.log(gameResult);