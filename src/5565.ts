import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `9850
1050
800
420
380
600
820
2400
1800
980`.split('\n');
}
let nums = input.map((l) => +l);
console.log(nums[0] - nums.slice(1).reduce((pre, cur, idx) => pre + cur));