import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `10000000`.split('\n');
}
let num = +input[0];
console.log(`${num * 0.78} ${num * 0.956}`)