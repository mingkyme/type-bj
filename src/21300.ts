import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `0 0 0 23 3 100`.split('\n');
}

let line = input[0].split(' ').map((n)=>+n);

let sum = 0;
for(let i of line){
    sum += i;
}

console.log(sum * 5);