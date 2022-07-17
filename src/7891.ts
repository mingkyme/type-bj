import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `4
-100 100
2 3
0 110101
-1000000000 1`.split('\n');
}
let result = "";
for(let i=1;i<input.length;i++){
  let line = input[i].split(' ');
  let n1 = BigInt(line[0]);
  let n2 = BigInt(line[1]);
  result += `${(n1+n2).toString()}\n`;
}
console.log(result);
