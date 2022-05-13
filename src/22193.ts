import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `3 4
123
4567`.split('\n');
}

let n1 = BigInt(input[1]);
let n2 = BigInt(input[2]);

console.log((n1*n2).toString());