import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');


console.log(input.map((n)=>+n % 42).filter((val,idx,arr)=>arr.indexOf(val)==idx).length);