import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3
  1
  4
  5
  7
  9
  6
  10
  11
  12
  13
  14
  15
  16
  17
  18
  19
  20
  21
  22
  23
  24
  25
  26
  27
  28
  29
  2`.split('\n');
}

let result: number[] = [];
let nums = input.map((n) => +n).sort((a, b) => a - b);
for (let i = 1; i <= 30;i++) {
  if(nums.indexOf(i) == -1){
    result.push(i);
  }
}
console.log(result.join("\n"));
