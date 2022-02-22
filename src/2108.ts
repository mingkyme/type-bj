import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let array = input.slice(1).map((n)=>+n);
array.sort((a,b)=>a-b);
console.log(Math.round(array.reduce((pre,cur,idx)=>pre+cur)/array.length).toString());
console.log(Math.round(array[(array.length-1)/2]));



let often : KV = {};
for (let i of array){
    if(!often[i]){
        often[i] = 0;
    }
    often[i]++;
}
let oftenSorted = Object.values(often).sort((a,b)=>b-a);
let max = oftenSorted[0];
if(oftenSorted[0] == oftenSorted[1]){
    let maxOftenArray = [];
    for(let k in often){
        if(often[k] == max){
            maxOftenArray.push(+k);
        }
    }
    maxOftenArray.sort((a,b)=>a-b);
    console.log(maxOftenArray[1]);
}else{
    for(let k in often){
        if(often[k] == max){
            console.log(k);
            break;
        }
    }
}
console.log(array[array.length-1]-array[0]);

interface KV {
    [key:string]:number;
}