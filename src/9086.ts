import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3
ACDKJFOWIEGHE
O
AB`.split('\n');
}

for (let i = 1; i < input.length; i++) {
  let line = input[i];
  console.log(`${line[0]}${line[line.length - 1]}`);
}