import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `2
5`.split('\n');
}

let n1 = +input[0];
let n2 = +input[1];

console.log(n1 * 8 + n2 * 3 - 28);