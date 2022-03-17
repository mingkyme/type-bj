import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `2 7`.split('\n');
}


let n1 = +input[0].split(' ')[0];
let n2 = +input[0].split(' ')[1];

console.log(`${n2-n1} ${n2}`);