import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
for(let i=0;i<input.length-1;i++){
    let array = input[i].split(' ').map((n)=>+n).sort((a,b)=>a-b);
    console.log(array.reduce((pre,cur,idx)=>pre-cur*cur,array[2]*array[2] * 2) == 0 ?"right":"wrong");
}