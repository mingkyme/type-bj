import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `11
1 4 1 2 4 2 4 2 3 4 4
2`.split('\n');
}

let line = input[1].split(' ');
let char = input[2];

console.log(line.filter((val, idx, arr) => val == char).length);
