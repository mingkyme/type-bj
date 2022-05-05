import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `100 80 70 60
80 70 80 90`.split('\n');
}

console.log(Math.max(...input.map((n) => n.split(' ').map((n) => +n).reduce((pre, cur, idx) => pre + cur))));
