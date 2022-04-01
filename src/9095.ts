import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `3
4
7
10`.split('\n');
}
input = input.splice(1);

let max = Math.max(...input.map((n)=>+n))
let array = [1,2,4];
for(let i=3;i<max;i++){
    array.push(array[i-3]+array[i-2]+array[i-1]);
}
for(let i=0;i<input.length;i++){
    console.log(array[+input[i]-1]);
}