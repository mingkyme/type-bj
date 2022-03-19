import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `2
0
1
2
3
4
5
6
20
21
22`.split('\n');
}

let max = Math.max(...input.slice(1).map((n)=>+n));

let array :number[][] = [];
array.push([1,0])
array.push([0,1]);
for(let i=2;i<=max;i++){
    array.push([array[i-2][0] + array[i-1][0],array[i-2][1] + array[i-1][1]])
}

for(let i=1;i<input.length;i++){
    console.log(array[+input[i]].join(' '))
}