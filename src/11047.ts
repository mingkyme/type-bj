import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split('\n');
}

let target = +input[0].split(' ')[1];

let count = 0;

for(let i=input.length-1;i>0;i--){
    let money = +input[i];
    if(target < money){
        continue;
    }
    let N = Math.floor(target / money);
    count += N;

    target -= (N * money);
}
console.log(count);