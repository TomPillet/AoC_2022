const fs = require('fs');
const test = fs.readFileSync(__dirname+'/test.txt', 'utf-8').trim().split(/\n/);
// const input = fs.readFileSync(__dirname+'/input.txt', 'utf-8').trim().split(/\n/);


console.log(test);
console.log(parseData(test));

function parseData(input) {
    const formatedData = input.map(x => x.split(','));
    let countCommonRanges = 0;

    for (let i = 0; i < formatedData.length; i++) {
        const minSectionFirstElf = parseInt(formatedData[i][0].charAt(0));
        const maxSectionFirstElf = parseInt(formatedData[i][0].charAt(2));
        
        const minSectionSecondElf = parseInt(formatedData[i][1].charAt(0));
        const maxSectionSecondElf = formatedData[i][1].charAt(2);
    
        if (maxSectionFirstElf <= minSectionSecondElf || minSectionFirstElf >= maxSectionFirstElf) {
            i = formatedData.length;
        } else {

            let minLessThanMax = true;
            while(minLessThanMax && minSectionFirstElf < maxSectionFirstElf) {

                if (minSectionFirstElf === maxSectionFirstElf) {
                    minLessThanMax = false;
                }

                minSectionFirstElf++;
            }

            if (minLessThanMax) {
                countCommonRanges++;
            }

        }
    }

    return countCommonRanges;
}