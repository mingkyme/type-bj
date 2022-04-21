import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `ljes=njak`.split('\n');
}

let line = input[0];

line = line.replace(/c=/g,"0");
line = line.replace(/c-/g,"0");
line = line.replace(/dz=/g,"0");
line = line.replace(/d-/g,"0");
line = line.replace(/lj/g,"0");
line = line.replace(/nj/g,"0");
line = line.replace(/s=/g,"0");
line = line.replace(/z=/g,"0");

console.log(line.length)
