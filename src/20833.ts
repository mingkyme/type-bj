import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `4`.split('\n');
}
let result = 1;
for (let i = 2; i <= +input[0]; i++) {
  result += i ** 3;
}
console.log(result);
