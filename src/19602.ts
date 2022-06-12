import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3
2
1`.split('\n');
}

let numbers = input.map((n) => +n);
let sum = numbers[0] + numbers[1] * 2 + numbers[2] * 3;
console.log(sum >= 10 ? "happy" : "sad");
