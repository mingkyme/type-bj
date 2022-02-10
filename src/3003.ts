import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const line1 = input[0].split(' ');
let n1 = +line1[0];
let n2 = +line1[1];
let n3 = +line1[2];
let n4 = +line1[3];
let n5 = +line1[4];
let n6 = +line1[5];

let str = "";

str = `${1-n1} ${1-n2} ${2-n3} ${2-n4} ${2-n5} ${8-n6}`;
console.log(str);
