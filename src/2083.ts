import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `Joe 16 34
Bill 18 65
Billy 17 65
Sam 17 85
# 0 0`.split('\n');
}
for(let i=0;i<input.length-1;i++){
  let line = input[i].split(' ');
  let name = line[0];
  let n1 = +line[1];
  let n2 = +line[2];

  console.log(name,(n1 > 17)||(n2 >= 80)?"Senior":"Junior");
  
}