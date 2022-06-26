import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `5`.split('\n');
}

let num = +input[0];

for (let i = 0; i < num; i++) {
  console.log("*".repeat(num - i));
}