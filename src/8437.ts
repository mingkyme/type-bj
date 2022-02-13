import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n1 = BigInt(input[0]);
let n2 = BigInt(input[1]);

console.log(((n1 + n2) / 2n).toString());
console.log(((n1 - n2) / 2n).toString());