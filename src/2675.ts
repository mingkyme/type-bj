import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for(let i=1;i<input.length;i++){
    let line = input[i].split(' ');
    let msg = "";
    for(let j=0;j<line[1].length;j++){
        for(let k=0;k<+line[0];k++){
            msg += line[1][j];
        }
    }
    console.log(msg);
}