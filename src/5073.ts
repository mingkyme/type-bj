import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `7 7 7
6 5 4
3 2 5
6 2 6
0 0 0`.split('\n');
}
let result = "";
for (let i = 0; i < input.length - 1; i++) {
  let line = input[i].split(' ').map((n) => +n);
  let max = Math.max(...line);
  let sum = line.reduce((pre, cur, idx) => pre + cur);
  if (max * 2 >= sum) {
    result += `Invalid\n`;
  } else if (line[0] == line[1] && line[1] == line[2]) {
    result += `Equilateral\n`;
  } else if ((line[0] == line[1]) || (line[0] == line[2]) || (line[1] == line[2])) {
    result += `Isosceles\n`;

  } else {
    result += `Scalene\n`;

  }
}
console.log(result);