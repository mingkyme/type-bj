import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `7 17 11 5`.split('\n');
}
let numbers = input[0].split(' ').map((n) => +n);
let n1 = Math.floor(numbers[1] / numbers[3]);
let n2 = Math.floor(numbers[2] / numbers[3]);

console.log(n1 * n2 > numbers[0] ? numbers[0] : n1 * n2);
