import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let line1 = input[1].split(' ').map((n)=>+n)

let count = 0;

for(let num of line1){
    if(num == 1){
        continue;
    }
    let max = Math.sqrt(num);
    let is = true;
    for (let i=2;i<=max;i++){
        if(num%i == 0){
            is= false;
            break;
        }
    }
    if(is){
        count++;
    }
}

console.log(count);