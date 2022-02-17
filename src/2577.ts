import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');

  let array = [0,0,0,0,0,0,0,0,0,0];
  let num = input.map((n)=>+n).reduce((pre,cur,idx)=>pre*cur,1).toString().split('')
  for(let i of num){
      array[+i]++;
  }

  console.log(array.join('\n'))