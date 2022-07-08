import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4`.split('\n');
}
let num = +input[0];

let result = 1;
for (let i = 2; i <= num; i++) {
    result *= i;
    result %= 10;
}
console.log(result);
