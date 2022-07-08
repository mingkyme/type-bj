import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `10
1
2
7
4
14
32
33
34
35
36`.split('\n');
}
let result = "";
for (let i = 1; i < input.length; i++) {
  let num = +input[i];
  if ((num & -num) == num) {
    result += `1\n`;

  } else {
    result += `0\n`;

  }
}
console.log(result);
