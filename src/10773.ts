import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4
3
0
4
0`.split('\n');
}

let stack: number[] = [];

for (let i = 1; i < input.length; i++) {
    let num = +input[i];
    if (num == 0) {
        stack.pop();
    } else {
        stack.push(num);
    }
}
console.log(stack.length>0?stack.reduce((pre,cur,idx)=>pre+cur):0);