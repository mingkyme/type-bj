import fs = require("fs");
const input: string = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

let array = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
for (let i = input.length - 1; i >= 0; i--) {
    array[input.charCodeAt(i) - 97] = i;
}
console.log(array.join(' '));