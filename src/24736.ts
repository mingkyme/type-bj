import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `1 3 0 0 1
3 1 1 1 1`.split('\n');
}

let result = "";

for(let i=0;i<input.length;i++){
    let line = input[i].split(' ').map((n)=>+n);
    let sum = line[0] * 6 + line[1] * 3 + line[2] * 2 +line[3] * 1 + line[4] * 2;
    result+= `${sum} `;
}

console.log(result);