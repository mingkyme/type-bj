import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(let i=1;i<input.length;i++){
    let num = 0;
    let result = true;
    for(let j=0;j<input[i].length;j++){
        if(num < 0){
            result = false;
            break;
        }
        
        if(input[i][j] == "("){
            num++;
        }else{
            num--;
        }
    }
    if(num == 0 && result){
        console.log("YES");
    }else{
        console.log("NO");
    }
}