import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');

let idx = +input[0];
let array = [];
for(let i=666;true;i++){
    if(i.toString().indexOf('666') > -1){
        array.push(i);
    }
    if(array.length == idx){
        break;
    }
}

console.log(array[array.length-1]);