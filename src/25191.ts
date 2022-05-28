import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3
4 2`.split('\n');
}
let chickenCount = +input[0];
let line2 = input[1].split(' ').map((n) => +n);
let num = Math.floor(line2[0] / 2) + line2[1];

console.log(chickenCount < num ? chickenCount : num);
