import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const line1 = input[0].split(' ');
let n1 = +line1[0];
let n2 = +line1[1];

console.log(n1 * (n2-1) + 1)
