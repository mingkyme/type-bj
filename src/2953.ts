import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `5 4 4 5
5 4 4 4
5 5 4 4
5 5 5 4
4 4 4 5`.split('\n');
}
let array = [];
for (let i = 0; i < input.length; i++) {
  let line = input[i].split(' ').map((n) => +n);
  array.push(line.reduce((pre, cur, idx) => pre + cur));
}

let max = Math.max(...array);
let idx = array.indexOf(max) + 1;

console.log(idx, max);
