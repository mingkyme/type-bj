import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `10`.split('\n');
}

let num = +input[0];

let visitedArray :boolean[] = new Array(1000001).fill(false);
let queue : number[][] = [];

queue.push([num,0]);
let result : number[];
while (true){
    let temp = queue.shift();
    if(temp![0] == 1){
        result = temp!;
        break;
    }
    if(visitedArray[temp![0]]){
        continue;
    }
    visitedArray[temp![0]] = true;
    if(temp![0] %3 == 0){
        queue.push([temp![0]/3,temp![1]+1]);
    }
    if(temp![0] %2 == 0){
        queue.push([temp![0]/2,temp![1]+1]);
    }
    queue.push([temp![0]-1,temp![1]+1]);
}
console.log(result[1]);