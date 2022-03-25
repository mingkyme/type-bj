import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `2
6
12`.split('\n');
}


let max = Math.max(...input.map((n)=>+n))

let array = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9]
for (let i=10;i<max;i++){
    array.push(array[i-2]+array[i-1]);
}
for(let i=1;i<input.length;i++){
    let num = +input[i];
    console.log(array[num])
}