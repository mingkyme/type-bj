import fs = require("fs");
const input: string = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

console.log(input+"??!")