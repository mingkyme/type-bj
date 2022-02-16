import * as fs from 'fs';
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i=1;i<input.length;i++){
    let num = 0;
    let sum = 0;
    for(let j=0;j<input[i].length;j++){
        if(input[i][j] == 'O'){
            num += 1;
            sum += num;
        }else{
            num = 0;
        }
    }
    console.log(sum);
}