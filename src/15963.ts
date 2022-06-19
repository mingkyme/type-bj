import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1 0`.split('\n');
}
let nums = input[0].split(' ').map((n) => +n);

console.log(nums[0] == nums[1] ? 1 : 0);
