import * as fs from 'fs';
const input:string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line1 = input[0].split(' ');

let n1 = +line1[0];
let n2 = +line1[1];
let n3 = +line1[2];
let n4 = +line1[3];

console.log(n1*n2 + n3*n4);