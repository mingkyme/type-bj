import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split('\n');
}
for (let i = 1; i < input.length; i++) {
    let line = input[i].split(' ').slice(1).map((n) => +n);
    let sum = line.reduce((pre, cur, idx) => pre + cur);

    let avg = sum / line.length;
    let result = line.filter((val, idx, arr) => val > avg).length;
    console.log(`${(result / line.length * 100).toFixed(3)}%`);
}