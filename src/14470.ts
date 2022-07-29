import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `35
92
31
50
11`.split('\n');
}

let nums = input.map((l) => +l);

if (nums[0] > 0) {
  console.log((nums[1] - nums[0]) * nums[4]);
} else {
  console.log((-nums[0]) * nums[2] + nums[3] + nums[1] * nums[4]);
}