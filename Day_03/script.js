const fs = require('fs');
const input = fs.readFileSync(__dirname+'/input.txt', 'utf-8').trim().split(/\n/);

// TODO : vérification si la longueur du sample est paire ou impaire

const test = 
`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split(/\n/);

const commonItems = input.map(sample => {
    let halfLenght = sample.length / 2; 
    let halfSample = sample.substring(halfLenght);

    let commonItem = '';

    for (let i=0; i < halfLenght; i++) {
        if (halfSample.includes(sample[i])) {
            commonItem = sample[i];
            i = halfLenght;
        }
    }  

    return commonItem;
});

console.log(commonItems);

const formatedItems = commonItems.map(item => {
    let priority = 0;
    if (item === item.toUpperCase()) priority = 26;

    item = item.toUpperCase();
    priority += parseInt(item.replace(/[A-Z]/g, i => i.toUpperCase().charCodeAt(0) - 64));

    return priority;
})

const prioritySum = formatedItems.reduce((a,c) => a+c, 0)

console.log(prioritySum);