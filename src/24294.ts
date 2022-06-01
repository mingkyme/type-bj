import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `2
2
4
2`.split('\n');
}
let numbers = input.map((n) => +n);

console.log(4 + 2 * Math.max(numbers[0], numbers[1]) + 2 * (numbers[2] + numbers[3]));
