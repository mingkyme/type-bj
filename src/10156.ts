import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `20 6 120`.split('\n');
}

let line = input[0].split(' ').map((n) => +n);
let n1 = line[0];
let n2 = line[1];
let n3 = line[2];

let result = n1 * n2 - n3;

console.log(result > 0 ? result : 0);
