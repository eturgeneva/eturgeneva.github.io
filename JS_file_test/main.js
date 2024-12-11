// const fs = require('fs');
// let data = 'Learning how to write in a file'
// fs.writeFile('output.txt', data, (err) => {
//     if (err) throw err;
// })

const fs = require('node:fs');
// const { text } = require('stream/consumers');
const data = fs.readFileSync('./driving.tsv', 'utf-8');
const textArray = data.split('\r\n');
console.log(textArray);