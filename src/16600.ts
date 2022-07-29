import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `64`.split('\n');
}
let num = +input[0];

console.log((Math.sqrt(num) * 4).toFixed(6));
