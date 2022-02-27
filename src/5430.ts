import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]`.trim().split('\n');
}

for(let i=1;i<input.length;i+=3){
    let commands = input[i];
    let count = +input[i+1];
    let arrayString = input[i+2];
    let array = count > 0 ? arrayString.slice(1,arrayString.length-1).split(',').map((n)=>+n):[];

    let err = false;
    let isReverse = false;
    for(let command of commands){
        switch(command){
            case "R":
                isReverse = !isReverse;
                break;
            case "D":
                let ele;
                if(isReverse){
                    ele = array.pop();
                }else{
                    ele = array.shift();
                }
                if(!ele){
                    err = true;
                }
                break;
        }
    }
    console.log(err ? "error" : `[${isReverse?array.reverse().join(","):array.join(",")}]`);   
}