import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `999`.split('\n');
}
let n = +input[0];
console.log(Math.pow(n,3));