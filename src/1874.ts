import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');

let count = +input[0];
let target = input.slice(1).map((n) => +n);
let stack: number[] = [];

let result: string[] = [];
for (let i = 1; i <= count+1; i++) {
    if(stack.length == 0){
        stack.push(i);
        result.push("+");
        continue;
    }
    if (target[0] == stack[stack.length-1]){
        i--;
        target.shift();
        stack.pop();
        result.push("-");
    }else{
        stack.push(i);
        result.push("+");
    }
}
result.pop(); // 마지막 n+1이 들어감.(+ 제외)
if(stack.length > 1){
    console.log("NO");
}else{
    console.log(result.join('\n'));
}
