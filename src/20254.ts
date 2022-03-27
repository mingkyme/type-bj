import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `1 1 1 1`.split('\n');
}
let line = input[0].split(' ').map((n)=>+n);

let result = line[0] * 56 + line[1] *   24 + line[2] * 14 + line[3] * 6;

console.log(result);