import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0].split(' ');

  let n1:bigint = BigInt(input[0]);
  let n2:bigint = BigInt(input[1]);

console.log(BigInt(n1/n2).toString());
console.log((n1%n2).toString());
