import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10
65
100
30
95`.split('\n');
}

console.log(input.map((n) => +n).map((n) => n < 40 ? 40 : n).reduce((pre, cur, idx) => pre + cur) / 5);
