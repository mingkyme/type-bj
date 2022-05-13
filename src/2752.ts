import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `3 1 2`.split('\n');
}
let line = input[0].split(' ').map((n)=>+n).sort((a,b)=>a-b).join(' ');
console.log(line);