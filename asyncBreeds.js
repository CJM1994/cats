// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) console.log('Return Value: ', data);
  });
};

breedDetailsFromFile('balinese');