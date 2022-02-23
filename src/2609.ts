import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let nums = input[0].split(' ').map((n)=>+n);
let numBig = nums[0] > nums[1]?nums[0]:nums[1];
let numSmall = nums[0]+nums[1]-numBig;

let calcNumBig = numBig;
let calcNumSmall = numSmall;
while(true){
    let value = calcNumBig%calcNumSmall;
    if(value == 0){
        break;
    }else{
        calcNumBig = calcNumSmall;
        calcNumSmall = value;
    }
}

console.log(calcNumSmall);
console.log(numBig * numSmall / calcNumSmall);
