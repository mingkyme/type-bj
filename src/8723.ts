import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3 4 5`.split('\n');
}
let nums = input[0].split(' ').map((n) => +n).sort((a, b) => a - b);

if (nums[0] == nums[2]) {
  console.log(2);
} else if (nums[2] ** 2 == nums[0] ** 2 + nums[1] ** 2) {
  console.log(1);
} else {
  console.log(0);
}