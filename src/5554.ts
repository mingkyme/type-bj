import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let n1 = +input[0];
let n2 = +input[1];
let n3 = +input[2];
let n4 = +input[3];

let sum = n1+n2+n3+n4;

console.log(Math.floor(sum / 60));
console.log(sum % 60);
