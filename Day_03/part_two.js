const fs = require('fs');
const input = fs.readFileSync(__dirname+'/input.txt', 'utf-8').trim().split(/\n/);
const commonItems = [];

let sampleIndex = 0;
while (sampleIndex < input.length) {
    const sample = input[sampleIndex];

    for (let charIndex = 0; charIndex < sample.length; charIndex++) {
        const char = sample.charAt(charIndex);

        if(input[sampleIndex+1].includes(char) && input[sampleIndex+2].includes(char)) {
            commonItems.push(char);
            charIndex = sample.length;
        }
    }

    sampleIndex += 3;
}

const formatedItems = commonItems.map(item => {
    let priority = 0;
    if (item === item.toUpperCase()) priority = 26;

    item = item.toUpperCase();
    priority += parseInt(item.replace(/[A-Z]/g, i => i.toUpperCase().charCodeAt(0) - 64));

    return priority;
})

const prioritySum = formatedItems.reduce((a,c) => a+c, 0)

console.log(prioritySum);