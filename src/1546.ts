import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');

let numbers = input[1].split(' ').map((n)=>+n)

let max = Math.max(...numbers);

console.log(numbers.map((n)=>n/max).reduce((pre,cur,idx)=>pre+cur) / numbers.length * 100)