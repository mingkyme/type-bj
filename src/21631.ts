import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3 3`.split('\n');
}
let nums = input[0].split(' ').map((n) => BigInt(n));

console.log(nums[0] >= nums[1] ? nums[1].toString() : (nums[0] + BigInt(1)).toString());
