import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `10110111`.split('\n');
}
console.log((BigInt("0b"+input[0]) * BigInt(17)).toString(2));