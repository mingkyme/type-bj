import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i of input){
    let line = i.split(' ');
    console.log(+line[0] + +line[1]);
}