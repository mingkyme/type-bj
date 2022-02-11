import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n1 = +input[0];
let n2 = +input[1];

let interval = n2 - n1;

console.log(n2+interval);