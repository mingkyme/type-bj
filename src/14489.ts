import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1000000000 1000000000
1000000001`.split('\n');
}

let line1 = input[0].split(' ').map((n) => +n).reduce((pre, cur, idx) => pre + cur);
let line2 = +input[1] * 2;

console.log(line1 - line2 >= 0 ? line1 - line2 : line1);
