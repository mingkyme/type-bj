import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');

let num = +input[0];

console.log(num * (num-1));