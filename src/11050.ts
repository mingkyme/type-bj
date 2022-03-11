import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `5 2`.split('\n');
}

let n1 = +input[0].split(' ')[0];
let n2 = +input[0].split(' ')[1];

let result = 1;

for(let i=0;i<n2;i++){
    result *= n1-i;
}

let mock = 1;

for(let i=2;i<=n2;i++){
    mock *= i;
}
console.log(result / mock);