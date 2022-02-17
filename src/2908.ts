import fs = require("fs");
const input: string = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

let line1= input.split(' ');
let n1 = +line1[0].split('').reverse().join('')
let n2 = +line1[1].split('').reverse().join('')

console.log(n1>n2?n1:n2)