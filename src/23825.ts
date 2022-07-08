import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `4 5`.split('\n');
}
let min = Math.min(...input[0].split(' ').map((n) => +n));

console.log(Math.floor(min / 2));