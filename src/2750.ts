import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `5
5
2
3
4
1`.split('\n');
}

console.log(input.slice(1).map((n)=>+n).sort((a,b)=>a-b).join('\n'));