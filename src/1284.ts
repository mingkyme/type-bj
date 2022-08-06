import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `120
5611
100
0`.split('\n');
}
let result = "";
for (let i = 0; i < input.length - 1; i++) {
  let line = input[i];
  let sum = 2;
  for (let j = 0; j < line.length; j++) {
    if (line[j] == '1') {
      sum += 2;
    } else if (line[j] == '0') {
      sum += 4;
    } else {
      sum += 3;
    }
  }
  sum += line.length - 1;
  result += `${sum}\n`;
}
console.log(result);
