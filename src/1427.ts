import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `2143`.split('\n');
}

console.log(input[0].split('').map((n) => +n).sort((a, b) => b - a).join(''));