import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let input = ["4"]

let array = [];

for(let i=1;i<=+input[0];i++){
    array.push(i)
}
let length = array.length;
let firstLength = length;
let index = 0;

let mode = true;
while (length > 1){
    if(array[index] == 0){
        index++;
        index %= firstLength;
        continue;
    }
    if(mode){
        array[index] = 0;
        length--;
    }
    mode = !mode;
    index++;
    index %= firstLength;
}
console.log(array.filter((n)=>n!=0)[0]);