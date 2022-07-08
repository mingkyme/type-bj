import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1 19
4 4
23 14
0 0`.split('\n');
}

for(let i=0;i<input.length-1;i++){
    let line = input[i].split(' ').map((n)=>+n);
    let n1 = line[0];
    let n2 = line[1];
    console.log(n1>n2?"Yes":"No");
    
}