import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let sum = 0;
for(let i=0;i<5;i++){
    sum += +input[i];
}
console.log(sum);