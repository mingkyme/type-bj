import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4 6 9`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);

let max = Math.max(...line);

let sum = line.reduce((pre, cur, idx) => pre + cur);
console.log(max * 3 - sum);
