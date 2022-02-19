import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');

let num : bigint = BigInt(input[0]);

console.log((num % 20000303n).toString())