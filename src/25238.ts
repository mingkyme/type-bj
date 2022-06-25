import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `200 20`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);
let n1 = line[0];
let n2 = 100 - line[1];

let result = n1 * n2 / 100;
console.log(result >= 100 ? "0" : "1");
