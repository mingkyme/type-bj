import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1
7`.split('\n');
}
let M = +input[0];
let D = +input[1];
if (M == 1) {
  console.log("Before");
} else if (M == 2) {
  if (D < 18) {
    console.log("Before");
  } else if (D == 18) {
    console.log("Special");
  } else {
    console.log("After");
  }
} else {
  console.log("After");
}