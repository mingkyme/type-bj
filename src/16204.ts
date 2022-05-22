import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4 3 2`.split('\n');
}

let line = input[0].split(' ').map((n) => +n);
let num = line[0];
let num2 = Math.abs(line[1] - line[2]);

console.log(num - num2);

