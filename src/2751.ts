import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let array = input.splice(1).map((n)=>+n).sort((a,b)=>a-b);
console.log(array.join('\n'));