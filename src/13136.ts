import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `7 9 3`.split('\n');
}

let line = input[0].split(' ').map((n) => +n);

console.log(Math.ceil(line[0] / line[2]) * Math.ceil(line[1] / line[2]));
