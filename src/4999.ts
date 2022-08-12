import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `aaah
aaah`.split('\n');
}
console.log(input[0].length<input[1].length ? "no" : "go");
