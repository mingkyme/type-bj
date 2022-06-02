import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `9
6
6
8`.split('\n');
}
let numbers = input.map((n) => +n);
if ((numbers[0] == 8 || numbers[0] == 9) && numbers[1] == numbers[2] && (numbers[3] == 8 || numbers[3] == 9)) {
    console.log("ignore");
} else {
    console.log("answer");
}