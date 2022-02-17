import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');

console.log(input[1].split(' ').map((n)=>+n).filter((n)=>n < +input[0].split(' ')[1]).join(' '));