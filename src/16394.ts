import fs = require("fs");
let input : string[];
input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let num = +input[0];
console.log(num - 1946);
