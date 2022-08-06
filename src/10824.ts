import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1000000 1000000 1000000 1000000`.split('\n');
}

let line = input[0].split(' ');

let n1 = BigInt(line[0] + line[1]);
let n2 = BigInt(line[2] + line[3]);

console.log((n1 + n2).toString());
