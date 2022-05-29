import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3
6
10`.split('\n');
}
let line = input.map((n) => +n);

let result = line[0] + line[1] - line[2];
console.log(result <= 0 ? "1" : "0");
