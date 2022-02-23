import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let maxLevel = 0;
let maxRoom = 0;

maxLevel = Math.max(...input.slice(1).filter((n, idx, arr) => idx % 2 == 0).map((n) => +n));
maxRoom = Math.max(...input.slice(1).filter((n, idx, arr) => idx % 2 == 1).map((n) => +n));

let array: number[][] = [];
for (let i = 0; i <= maxLevel; i++) {
    array.push([]);
    for (let j = 0; j < maxRoom; j++) {
        if (i == 0) {
            array[i][j] = j + 1;
        } else if (j == 0) {
            array[i][j] = 1;
        } else {
            array[i][j] = array[i][j-1] + array[i-1][j]
        }

    }
}
for(let i=1;i<input.length;i+=2){
    console.log(array[+input[i]][+input[i+1]-1]);
}