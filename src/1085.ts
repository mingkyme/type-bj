import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');

let numbers = input[0].split(' ').map((n)=>+n);
let array = [];

array.push(numbers[0],numbers[1],numbers[2]-numbers[0],numbers[3]-numbers[1]);
console.log(Math.min(...array));