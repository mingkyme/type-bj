import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `N`.split('\n');
}

if (input[0] == 'N' || input[0] == 'n') {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}