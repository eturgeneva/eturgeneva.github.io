const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const a = [1, 2, 3, 4, 5];
const [b, c, ...rest] = a;
console.log(rest);
console.log(b, c);


const numbers = [3, 6, 9, 12, 15, 18, 22, 24];
numbers[0] = 1;
console.log(numbers);