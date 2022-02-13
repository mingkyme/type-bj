import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n1 = +(input[0]);

let result = `${(n1+1) * 2} ${(n1+1) * 3}`;
console.log(result);