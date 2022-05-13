import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `14 30
20`.split('\n');
}


let h = +input[0].split(' ')[0];
let m = +input[0].split(' ')[1];
let d = +input[1];

let result = h * 60 + m + d;

result%=1440;


console.log(Math.floor(result/60), result%60);