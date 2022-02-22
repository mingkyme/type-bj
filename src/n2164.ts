import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let array = [];

for(let i=1;i<=+input[0];i++){
    array.push(i)
}

while (array.length > 1){
    array.shift();
    array.push(array.shift());
}
console.log(array[0]);