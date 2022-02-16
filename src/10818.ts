import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let array:number[] = input[1].split(' ').map(( n )=> +n );

let result = `${Math.min(...array)} ${Math.max(...array)}`;

console.log(result);