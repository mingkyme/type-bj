import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `-2 5`.split('\n');
}

let line = input[0].split(' ').map((n) => +n);
let result = Math.abs(line[0] - line[1]);

console.log(result);