import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `10 7`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);
let n1 = line[0];
let n2 = line[1];

if (n1 == n2) {
  console.log(n1);
} else {
  console.log(Math.max(...line));
}