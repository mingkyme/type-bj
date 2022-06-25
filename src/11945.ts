import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `5 7
0010000
0111010
1111111
0111010
0010000`.split('\n');
}

for (let i = 1; i < input.length; i++) {
  console.log(input[i].split('').reverse().join(''));
}