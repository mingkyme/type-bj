import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `2
10000
2
1 2000
3 400
50000
0`.split('\n');
}
let result = "";

let N = +input[0];
let now = 0;
for (let i = 0; i < N; i++) {
  let carPrice = +input[++now];
  let optionLength = +input[++now];
  let optionPrice = 0;
  for (let j = 0; j < optionLength; j++) {
    let line = input[++now].split(' ').map((n) => +n);
    optionPrice += line[0] * line[1];
  }
  result += `${carPrice + optionPrice}\n`;
}
console.log(result);
