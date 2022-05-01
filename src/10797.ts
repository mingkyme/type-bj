import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1
1 2 3 4 5`.split('\n');
}

let num = +input[0];
console.log(input[1].split(' ').map((n) => +n).filter((n) => n == num).length);