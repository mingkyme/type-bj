import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `5 3
5 4 3 2 1
1 3
2 4
5 5`.split('\n');
}

let nums = input[1].split(' ').map((n) => +n);
let reduceArray: number[] = [];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    reduceArray.push(sum);
    sum += nums[i];
}
reduceArray.push(sum);
let result = "";
for (let i = 2; i < input.length; i++) {
    let line = input[i].split(' ').map((n) => +n);
    let start = line[0];
    let end = line[1];
    result += `${reduceArray[end] - reduceArray[start - 1]}\n`;
}
console.log(result);