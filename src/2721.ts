import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `4
3
4
5
10`.split('\n');
}
let result = "";
for (let i = 1; i < input.length; i++) {
  let num = +input[i];
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += (i + 1) * (i + 2) / 2 * i;
  }
  result += `${sum}\n`;
}
console.log(result);
