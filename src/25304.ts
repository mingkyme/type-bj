import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `260000
4
20000 5
30000 2
10000 6
5000 8`.split('\n');
}

let num = +input[0];
for (let i = 2; i < input.length; i++) {
  let line = input[i].split(' ').map((n) => +n);
  num -= line[0] * line[1];
}
console.log(num == 0 ? "Yes" : "No");
