import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `100`.split('\n');
}

let num = +input[0];
if (num % 10 != 0) {
    console.log(-1);
} else {
    let countA = Math.floor(num / 300);
    num -= 300 * countA;
    let countB = Math.floor(num / 60);
    num -= 60 * countB;
    let countC = Math.floor(num / 10);
    console.log(countA, countB, countC);
}