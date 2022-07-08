import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `20
25
30
6
8`.split('\n');
}
let numbers = input.map((n) => +n);
let koreanUseDays = Math.ceil(numbers[1] / numbers[3]);
let mathUseDays = Math.ceil(numbers[2] / numbers[4]);

let longDay = koreanUseDays > mathUseDays ? koreanUseDays : mathUseDays;

console.log(numbers[0] - longDay);
