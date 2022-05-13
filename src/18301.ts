import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `15 18 11`.split('\n');
}

let line = input[0].split(' ').map((n) => +n);

let A = line[0];
let B = line[1];
let C = line[2];

console.log( Math.floor((A+1) * (B+1) / (C+1) -1) )