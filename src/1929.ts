import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');
// const input: string[] = ["3 23"];
let line1 = input[0].split(' ').map((n) => +n);


let arr = Array.from({ length: line1[1]+1 }, (v, k) => true);
arr[0] = false;
arr[1] = false;

let max = Math.sqrt(line1[1]);
for (let i = 2; i <= max; i++) {
    if (arr[i]) {
        for (let j = i * i; j <= line1[1]; j += i) {
            arr[j] = false;
        }
    }
}
for (let i = line1[0]; i <= line1[1]; i++) {
    if (arr[i]) {
        console.log(i);
    }
}
// console.log(arr);