var fs = require('fs');
const input = fs.readFileSync('/home/tompillet/Documents/0 - Coding/AOC/Day_01/input.txt', 'utf-8').split(/\n/);

// PART ONE
var max = 0,
    count = 0
    currElf = 1,
    maxElf = 1;

input.forEach(input => {
    if (input.length > 0) {
        count += parseInt(input);
    } else {
        if (count > max) {
            max = count;
            maxElf = currElf;
        }
        currElf++; 
        count = 0;
    }
});



// PART TWO
var count = 0;
var allCarries = [];

input.forEach(input => {
    if (input.length > 0) {
        count += parseInt(input);
    } else {
        allCarries.push(count);
        count = 0;
    }
});

allCarries.sort(function(a, b){return b - a});
console.log(allCarries[0]+allCarries[1]+allCarries[2]);

// Solution intéressante : https://github.com/caderek/aoc2022/blob/main/src/day01/index.ts
const parseInput = (rawInput) =>
  rawInput.split("\n\n").map((items) => items.split("\n").map(Number))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  return Math.max(...input.map((entry) => entry.reduce((a, b) => a + b, 0)))
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return input
    .map((entry) => entry.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0)
}