import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `2 1 5`.split('\n');
}

let line1 = input[0].split(' ');

let n1 = +line1[0];
let n2 = +line1[1];
let n3 = +line1[2];

let lastDay = Math.ceil((n3-n1) / (n1-n2))

console.log(lastDay+1)