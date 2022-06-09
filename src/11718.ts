import fs = require("fs");
let input: string;
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString();
} else {
    input = `Hello
Baekjoon
Online Judge`;
}
console.log(input);
