import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `52 9 16`.split('\n');
}

let line = input[0].split(' ').map((n) => +n);
let n1 = line[0];
let n2 = line[1];
let n3 = line[2];

let r = n1 / Math.sqrt(Math.pow(n2, 2) + Math.pow(n3, 2))

console.log(Math.floor(n2 * r), Math.floor(n3 * r));
