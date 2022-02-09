import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[0]
    .split(' ');

let num = 0;
for(let i of input){
    num += (+i)*(+i);
}
num %= 10;
console.log(num);