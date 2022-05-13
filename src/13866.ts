import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `0 0 1 1000`.split('\n');
}
let nums = input[0].split(' ').map((n) => +n);
console.log(Math.abs(nums[3] + nums[0] - nums[1] - nums[2]));
