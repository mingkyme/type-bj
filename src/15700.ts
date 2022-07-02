import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1 2`.split('\n');
}
let nums = input[0].split(' ').map(BigInt);
let result = nums[0] * nums[1];
console.log((result / BigInt(2)).toString());
