import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `2003 3 5
2003 4 5`.split('\n');
}
let line1 = input[0].split(' ').map(Number);
let line2 = input[1].split(' ').map(Number);
if (line1[1] < line2[1]) {
  console.log(line2[0] - line1[0]);

} else if (line1[1] == line2[1]) {

  if (line1[2] <= line2[2]) {
    console.log(line2[0] - line1[0]);
  } else {
    console.log(line2[0] - line1[0] - 1);
  }
} else {
  console.log(line2[0] - line1[0] - 1);
}

console.log(line2[0] - line1[0] + 1);
console.log(line2[0] - line1[0]);
