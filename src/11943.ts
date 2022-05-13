import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1 2
3 4`.split('\n');
}

let lines = input.map((line) => line.split(' ').map((n) => +n));

let n1 = lines[0][0] + lines[1][1];
let n2 = lines[0][1] + lines[1][0];

console.log(n1 < n2 ? n1 : n2);
