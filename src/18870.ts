import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `5
2 4 -10 4 -9`.split('\n');
}

let set = new Set<number>();
let map = new Map<number,number>();

let line = input[1].split(' ').map((n)=>+n);

for(let i=0;i<line.length;i++){
    set.add(line[i]);
}

let array = Array.from(set);
array.sort((a,b)=>a-b);
for(let i=0;i<array.length;i++){
    map.set(array[i],i);
}

let result = "";
for(let i=0;i<line.length;i++){
    result += `${map.get(line[i])} `
}

console.log(result);