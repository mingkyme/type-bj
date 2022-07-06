import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `2
1 2 3 4 5 6 7
13 78 39 42 54 93 86`.split('\n');
}

let result = "";

for (let i = 1; i < input.length; i++) {
  let line = input[i].split(' ').map((n) => +n).filter((n) => n % 2 == 0);
  result += `${line.reduce((pre, cur, idx) => pre + cur)} ${Math.min(...line)}\n`;
}
console.log(result);