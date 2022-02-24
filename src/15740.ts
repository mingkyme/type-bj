import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let line1 = input[0].split(' ');

let n1 = BigInt(line1[0])
let n2 = BigInt(line1[1])

console.log((n1+n2).toString());