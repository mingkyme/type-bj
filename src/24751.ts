import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `80`.split('\n');
}
let num = +input[0];
console.log((100 / num).toFixed(10));
console.log((100 / (100 - num)).toFixed(10));
