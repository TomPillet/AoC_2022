const fs = require('fs');
// const test = fs.readFileSync(__dirname+'/test.txt', 'utf-8').trim().split(/\n/);
const input = fs.readFileSync(__dirname+'/input.txt', 'utf-8').trim().split(/\n/);

console.log(parsePairsData(input));

function parsePairsData(data) {
    const formatedData = data.map(x => x.split(','));
    let countPairsOverlaps = 0;

    for (let i = 0; i < formatedData.length; i++) {
        const formatedSectionFirstElf = formatedData[i][0].split('-');
        const minSectionFirstElf = parseInt(formatedSectionFirstElf[0]);
        const maxSectionFirstElf = parseInt(formatedSectionFirstElf[1]);
        
        const formatedSectionSecondElf = formatedData[i][1].split('-');
        const minSectionSecondElf = parseInt(formatedSectionSecondElf[0]);
        const maxSectionSecondElf = parseInt(formatedSectionSecondElf[1]);
    

        if ((minSectionFirstElf <= minSectionSecondElf && maxSectionFirstElf >= maxSectionSecondElf)
            || (minSectionFirstElf >= minSectionSecondElf && maxSectionFirstElf <= maxSectionSecondElf))
        {
            countPairsOverlaps++;
        }
    }

    return countPairsOverlaps;
}