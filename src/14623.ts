import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1010101010101010101
1010101010101010101`.split('\n');
}

let num1 = BigInt("0b"+input[0]);
let num2 = BigInt("0b"+input[1]);

console.log((num1 * num2).toString(2));
