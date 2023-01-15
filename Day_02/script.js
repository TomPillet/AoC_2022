var fs = require('fs');
const input = fs.readFileSync('/home/tompillet/Documents/0 - Coding/AOC/Day_02/input.txt', 'utf-8');

const game = input.split(/\n/);

const scoreTransform = {
        
    'X' : 1,
    'Y' : 2,
    'Z' : 3,

    'R' : 1,
    'P' : 2,
    'S' : 3,

};

function getGameResult(gameInput, rules) {
    const rounds = gameInput.map(round => {
        const roundResult = rules[round];
        const playScore = scoreTransform[round[2]];
        
        return roundResult + playScore;
    });
    return rounds.reduce((a,c) => a+c, 0);
}

// PART ONE
const rulesOne = {

    'A X' : 3,
    'A Y' : 6,
    'A Z' : 0,

    'B X' : 0,
    'B Y' : 3,
    'B Z' : 6,

    'C X' : 6,
    'C Y' : 0,
    'C Z' : 3,

};

console.log(getGameResult(game, rulesOne));


// PART TWO
const strategyGuide = {

    'A X' : 'A S',
    'A Y' : 'A R',
    'A Z' : 'A P',

    'B X' : 'B R',
    'B Y' : 'B P',
    'B Z' : 'B S',

    'C X' : 'C P',
    'C Y' : 'C S',
    'C Z' : 'C R'

}
const rulesTwo = {

    'A R' : 3,
    'A P' : 6,
    'A S' : 0,

    'B R' : 0,
    'B P' : 3,
    'B S' : 6,

    'C R' : 6,
    'C P' : 0,
    'C S' : 3
    
}

const formatedGame = game.map(round => strategyGuide[round]);
console.log(getGameResult(formatedGame, rulesTwo));