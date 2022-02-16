import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(input[0].charCodeAt(0));
