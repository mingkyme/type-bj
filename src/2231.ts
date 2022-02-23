import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let target = +input[0];

let num = 0;
for(let i=1;i<target;i++){
    if(i.toString().split('').map((n)=>+n).reduce((pre,cur,idx)=>pre+cur)+i == target){
        num = i;
        break;
    }
}

console.log(num);