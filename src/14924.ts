import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `50 75 200`.split('\n');
}
let nums = input[0].split(" ").map((n) => +n);
let n1 = nums[0];
let n2 = nums[1];
let n3 = nums[2];

console.log(n3 / (n1 * 2) * n2);

