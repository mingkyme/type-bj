import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `1`.split('\n');
}

let num = +input[0];

let result = 0;
let now = num;
while(true){
    result++;
    let d10 = Math.floor(now /10);
    let d1 = now%10;

    let sum = d10 + d1;

    now = d1 * 10 + (sum %10);
    if(now == num){
        break;
    }
}
console.log(result);