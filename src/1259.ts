import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');

for(let i=0;i<input.length-1;i++){
    let result = true;
    for(let j=0;j<input[i].length;j++){
        if(input[i][j] != input[i][input[i].length-j-1]){
            result = false;
            break;
        }
    }
    console.log(result?"yes":"no");
}