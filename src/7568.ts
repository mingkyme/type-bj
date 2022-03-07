import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `5
55 185
58 183
88 186
60 175
46 155`.split('\n');
}

let array :number[][] = [];

for(let i=1;i<input.length;i++){
    array.push(input[i].split(' ').map((n)=>+n));
}

let str ="";

for(let i=0;i<array.length;i++){
    let rank = 1;
    let myInfo = array[i];
    for(let j=0;j<array.length;j++){
        let tempInfo = array[j];
        if(myInfo[0] < tempInfo[0] && myInfo[1] < tempInfo[1]){
            rank++;
        }
    }
    str += `${rank} `;
}
console.log(str)