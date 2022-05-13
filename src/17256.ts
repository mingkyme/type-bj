import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `15 16 17
19 32 90`.split('\n');
}
let line1 = input[0].split(' ').map((n)=>+n);
let line2 = input[1].split(' ').map((n)=>+n);

console.log(line2[0] - line1[2], line2[1]/ line1[1], line2[2] - line1[0]);