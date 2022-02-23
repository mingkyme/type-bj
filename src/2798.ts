import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let target = +input[0].split(' ')[1];
let array = input[1].split(' ').map((n)=>+n);

let resultArray = [];
for(let i=0;i<array.length-2;i++){
    for(let j=i+1;j<array.length-1;j++){
        for(let k=j+1;k<array.length;k++){
            resultArray.push(array[i]+array[j]+array[k]);
        }
    }   
}

console.log(resultArray.filter((n)=>n<=target).sort((a,b)=>b-a)[0]);