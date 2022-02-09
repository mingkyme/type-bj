import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const line1 = input[0].split(' ');
const line2 = input[1].split(' ');
let peopleCount = line1[0];
let size = line1[1];

let exactCount = +peopleCount * +size;

let result = "";
for(let i of line2){
    result += +i - exactCount;
    result += " ";
}
console.log(result);