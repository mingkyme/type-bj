import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `15
21
15
42
15
62`.split('\n');
}

let scores = input.map((n) => +n);

let range1 = scores.slice(0, 4);
let range2 = scores.splice(4);

console.log(range1.reduce((pre, cur, idx) => pre + cur) - Math.min(...range1) + range2.reduce((pre, cur, idx) => pre + cur) - Math.min(...range2));
