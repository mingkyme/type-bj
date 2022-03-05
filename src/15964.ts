import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `3 4`.split('\n');
}

let line1 = input[0].split(' ');
let n1 = +line1[0];
let n2 = +line1[1];

console.log(n1* n1 - n2 * n2);