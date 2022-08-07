import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1 100
2 7
10 9
10 10`.split('\n');
}
for (let i = 0; i < input.length; i++) {
  let line = input[i].split(' ').map((n) => +n);
  console.log(Math.floor(line[1] / (line[0] + 1)));
}