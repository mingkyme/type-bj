import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `2 1000000007
2147483647 2147483647`.split('\n');
}
let num = +input[0].split(' ')[1];
let line = input[1].split(' ').map((n) => +n);
let result = BigInt(1);

for (let i = 0; i < line.length; i++) {
  result *= BigInt(line[i] % num);
  result %= BigInt(num);
}

console.log(result.toString());
