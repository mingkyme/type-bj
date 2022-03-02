import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.split('\n');
}


console.log(input.slice(1).sort((a,b)=>+a.split(' ')[0] - +b.split(' ')[0]).join('\n'));