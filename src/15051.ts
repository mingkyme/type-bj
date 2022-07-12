import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `10
20
30`.split('\n');
}

let nums = input.map((l) => +l);

let sum1 = nums[1] * 2 + nums[2] * 4;
let sum2 = nums[0] * 2 + nums[2] * 2;
let sum3 = nums[0] * 4 + nums[1] * 2;

console.log(Math.min(sum1, sum2, sum3));
