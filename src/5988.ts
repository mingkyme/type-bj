import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `2
1024
5931`.split('\n');
}
let result = "";

for (let i = 1; i < input.length; i++) {
  result += `${+input[i][input[i].length - 1] % 2 == 0 ? "even" : "odd"}\n`;
}
console.log(result);
