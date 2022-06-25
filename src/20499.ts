import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `0/0/1`.split('\n');
}
let kda = input[0].split('/').map((n) => +n);
if (kda[1] == 0) {
  console.log("hasu");
} else {
  console.log(kda[0] + kda[2] >= kda[1] ? "gosu" : "hasu");
}
