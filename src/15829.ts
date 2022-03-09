import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3
aaaaaaaaaaaaaaaaaaaaa`.split('\n');
}
let val = 0;
let pow = 1;
for (let i = 0; i < input[1].length; i++) {
    val += (input[1][i].charCodeAt(0) - 96) * pow;
    pow *= 31;
    val %= 1234567891;
    pow %= 1234567891;
}
console.log(val)