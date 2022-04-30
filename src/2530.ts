import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `14 30 0
200`.split('\n');
}
let line1 = input[0].split(' ').map((n)=>+n);
let span = +input[1];

let now = line1[0] * 3600 + line1[1] * 60 + line1[2];

let afterTime = now + span;
afterTime %= 86400;
console.log(`${Math.floor(afterTime/3600)} ${Math.floor(afterTime%3600/60)} ${afterTime%60}`);