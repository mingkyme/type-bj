import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `60 10 300 1000`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);
let a = line[0] - 1;
let b = line[1];
let c = line[2];
let d = line[3];

console.log(Math.floor(a / b) * c * d);