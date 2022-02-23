import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let target = +input[0];

let num = 1;
let i = 1;
for (i = 1; num < target; i++) {
    num = num + i * 6;
}
console.log(i);