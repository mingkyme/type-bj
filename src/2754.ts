import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `A`.split('\n');
}

let str = input[0];
let score = 0;
if (str.startsWith("A")) {
  score = 4;
} else if (str.startsWith("B")) {
  score = 3;
} else if (str.startsWith("C")) {
  score = 2;
} else if (str.startsWith("D")) {
  score = 1;
}

if (str.endsWith("+")) {
  score += 0.3;
} else if (str.endsWith("-")) {
  score -= 0.3;
}

console.log(score.toFixed(1));
