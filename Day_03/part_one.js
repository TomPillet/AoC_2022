const fs = require('fs');
const input = fs.readFileSync(__dirname+'/input.txt', 'utf-8').trim().split(/\n/);

// TODO : vérification si la longueur du sample est paire ou impaire

const commonItems = input.map(rucksack => {
    let halfLenght = rucksack.length / 2; 
    let halfRucksack = rucksack.substring(halfLenght);
    let commonItem = '';

    for (let charIndex = 0; charIndex < halfLenght; charIndex++) {
        if (halfRucksack.includes(rucksack[i])) {
            commonItem = rucksack[charIndex];
            charIndex = halfLenght;
        }
    }  

    return commonItem;
});

const formatedItems = commonItems.map(item => {
    let priority = (item === item.toUpperCase()) ? 26 : 0;

    item = item.toUpperCase();
    priority += parseInt(item.replace(/[A-Z]/g, i => i.toUpperCase().charCodeAt(0) - 64));

    return priority;
})

console.log(formatedItems.reduce((a,c) => a+c, 0));