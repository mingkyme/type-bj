import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1234`.split('\n');
}
let num = +input[0];
num **= 0.5
num *= 4
console.log(num);
