import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10 512 512`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);
let N = line[0];
let r = line[1];
let c = line[2];

let now = 0;
let result = 0;

SetNumber(0,0,Math.pow(2,N),r,c);
console.log(result);


function SetNumber(i: number, j: number, size: number, targetI: number, targetJ: number) {
    if(i > targetI && j > targetJ){
        return;
    }else if (size == 2) {
        if(i == targetI && j == targetJ){
            result = now;
        }
        now++;
        if(i == targetI && j+1 == targetJ){
            result = now;
        }
        now++;
        if(i+1 == targetI && j == targetJ){
            result = now;
        }
        now++;
        if(i+1 == targetI && j+1 == targetJ){
            result = now;
        }
        now++;
    } else {
        SetNumber(i, j, size / 2, r, c);
        SetNumber(i, j + (size / 2), size / 2, r, c);
        SetNumber(i + (size / 2), j, size / 2, r, c);
        SetNumber(i + (size / 2), j + (size / 2), size / 2, r, c);
    }
}
