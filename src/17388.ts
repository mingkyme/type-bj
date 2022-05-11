import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `31 41 59`.split('\n');
}
const unis = ["Soongsil", "Korea", "Hanyang"];
let line = input[0].split(' ').map((n) => +n);
if (line.reduce((pre, cur, idx) => pre + cur) >= 100) {
    console.log("OK");
} else {
    let min = Math.min(...line);
    console.log(unis[line.indexOf(min)]);
}