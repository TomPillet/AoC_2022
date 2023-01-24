const fs = require('fs');
const input = fs.readFileSync(__dirname+'/input.txt', 'utf-8').trim().split(/\n/);
const commonItems = [];

let rucksackIndex = 0;
while (rucksackIndex < input.length) {
    const firstGroupRucksack = input[rucksackIndex];

    for (let charIndex = 0; charIndex < firstGroupRucksack.length; charIndex++) {
        const char = firstGroupRucksack.charAt(charIndex);

        if(input[rucksackIndex+1].includes(char) && input[rucksackIndex+2].includes(char)) {
            commonItems.push(char);
            charIndex = firstGroupRucksack.length;
        }
    }

    rucksackIndex += 3;
}

const formatedItems = commonItems.map(item => {
    let priority = (item === item.toUpperCase()) ? 26 : 0;

    item = item.toUpperCase();
    priority += parseInt(item.replace(/[A-Z]/g, i => i.toUpperCase().charCodeAt(0) - 64));

    return priority;
});

console.log(formatedItems.reduce((a,c) => a+c, 0));