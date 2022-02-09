import fs = require("fs");
const input: string = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim();
let num = parseInt(input,16);
console.log(num);