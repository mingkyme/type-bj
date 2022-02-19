import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');

  console.log(input[0].split(' ').map((n)=> +n).reduce((pre,cur,idx)=>pre+cur))