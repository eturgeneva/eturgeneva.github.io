import os from 'os';

let isNegative;
const number = -2;
isNegative = number < 0;

console.log(isNegative);
console.log(number);

// const os = require('os');
const local = {
    'Home directory': os.homedir(),
    'Operating system': os.type(),
    'Last Reboot': os.uptime()
}

console.log(local);