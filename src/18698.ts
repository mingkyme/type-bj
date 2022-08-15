import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3
UUUDU
DDD
UU`.split('\n');
}
for(let i=1;i<input.length;i++){
  let count = 0;
  for(let j=0;j<input[i].length;j++){
    if(input[i][j] == "D"){
      break;
    }
    count++;
  }
  console.log(count);
  
}