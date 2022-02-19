import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');


let numbers = input[0].split(' ').map((n)=>+n);

console.log(Math.floor(numbers[2] / numbers[1]),numbers[2]%numbers[1])