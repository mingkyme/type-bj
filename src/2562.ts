import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let array = input.map((n)=>+n);

let maxValue = Math.max(...array);
console.log(maxValue);
console.log(array.indexOf(maxValue)+1);
