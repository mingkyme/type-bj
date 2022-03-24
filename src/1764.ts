import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `2 2
a
aa
a
aa`.split('\n');
}

let n = +input[0].split(' ')[0];

let set : Set<string> = new Set();

let array :string[] = [];
for(let i=0;i<input.length;i++){
    if(i <= n){
        set.add(input[i]);
    }else{
        if(set.has(input[i])){
            array.push(input[i]);
        }
    }
}
array.sort();
console.log(array.length);
console.log(array.join("\n"));