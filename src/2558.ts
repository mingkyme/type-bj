import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let n1: bigint = (BigInt(input[0]));
let n2: bigint = (BigInt(input[1]));

console.log((n1 + n2).toString());