import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `12 13 14`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);

let startTime = 11 * 24 * 60 + 11 * 60 + 11;

let time = line[0] * 24 * 60 + line[1] * 60 + line[2];

console.log(time - startTime >= 0 ? time - startTime : -1);