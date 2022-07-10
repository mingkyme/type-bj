import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4`.split('\n');
}
let num = +input[0];

num /= 4;

let result = "";
for(let i=0;i<num ;i++){
  result += "long ";
}
result += "int";
console.log(result);
