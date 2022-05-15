import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1 1 0`.split('\n');
}
let winners = ["A", "B", "C"]
let line = input[0].split(' ').map((n) => +n);
let sum = line.reduce((pre, cur, idx) => pre + cur);

if (sum == 0 || sum == 3) {
    console.log("*");
} else {
    if (sum == 1) {
        console.log(winners[line.indexOf(1)]);
    } else { // sum == 2
        console.log(winners[line.indexOf(0)]);
    }
}