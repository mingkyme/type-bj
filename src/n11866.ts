import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `7 3`.split('\n');
}


let peopleCount = +input[0].split(' ')[0];
let roundNumber = +input[0].split(' ')[1];

let queue : number[] = [];
let idx = roundNumber - 1;

for(let i=0;i<peopleCount;i++){
    queue.push(i+1);
}

let output :number[]= [];

while(queue.length>0){
    output.push(queue.splice(idx,1)[0])
    idx = (idx+roundNumber-1) % queue.length;
}

console.log(`<${output.join(', ')}>`)