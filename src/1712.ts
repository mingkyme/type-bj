import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `2100000000 10 10`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);

let a = line[0];
let b = line[1];
let c = line[2];

if (b >= c) {
    console.log(-1);
} else {
    let diff = c-b;
    console.log(Math.floor(a / diff)+1);
}