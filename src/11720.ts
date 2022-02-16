import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


console.log(input[1].split('').map((n)=>+n).reduce((pre,cur,inx)=>pre+cur));