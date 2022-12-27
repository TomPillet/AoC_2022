var fs = require('fs');
const input = fs.readFileSync('/home/tompillet/Documents/0 - Coding/AOC/Day_01/input.txt', 'utf-8');

// ROCK = A, X
// SCISSORS = B, Y
// PAPER = C, Z

// PART ONE
const rules = {
    'A X' : 'D',
    'A Y' : 'L',
    'A Z' : 'W',

    'B X' : 'W',
    'B Y' : 'D',
    'B Z' : 'L',

    'C X' : 'L',
    'C Y' : 'W',
    'C Z' : 'D',
}

const gameOne = input.split(/\n/);