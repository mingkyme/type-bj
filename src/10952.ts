import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i of input){
    if(i == "0 0"){
        continue;
    }
    let line = i.split(' ');
    console.log(+line[0] + +line[1]);
}