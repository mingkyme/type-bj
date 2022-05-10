import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1 + 2 = 3`.split('\n');
}

let n1 = +input[0][0];
let n2 = +input[0][4];
let n3 = +input[0][8];

console.log(n1 + n2 == n3 ? "YES" : "NO");
