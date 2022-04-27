import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4
20
8`.split('\n');
}
let a = BigInt(input[0]);
let b = BigInt(input[1]);
let c = BigInt(input[2]);

console.log(((b - c) / a).toString());
