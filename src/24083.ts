import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `9
5`.split('\n');
}
let num = input
.map((n) => +n)
.reduce((pre, cur, idx) => pre + cur) % 12;
console.log(num != 0?num:12);
