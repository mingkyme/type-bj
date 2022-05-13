import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `5
3 1 4 3 2`.split('\n');
}

let array = input[1].split(' ').map((n) => +n);

array.sort((a, b) => a - b);

let time = 0;
let pre = 0;
for (let i = 0; i < array.length; i++) {
    time += pre + array[i];
    pre = pre + array[i];
}

console.log(time);