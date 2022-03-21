import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `10`.split('\n');
}

let num : bigint = BigInt(1);
for(let i=2;i<=+input;i++){
    num *= BigInt(i);
}
let numString = num.toString();
let result = 0;
for(let i=numString.length-1;i>=0;i--){
    if(numString[i] == "0"){
        result++;
    }else{
        console.log(result);
        break;
    }
}
