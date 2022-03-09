import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10
5
2
3
1
4
2
3
5
1
7`.split('\n');
}
let array = new Array(10000).fill(0);
for (let i = 1; i < input.length; i++) {
    array[+input[i] - 1]++;
}

let str = "";
for (let i = 0; i < 10000; i++) {
    if(array[i] == 0 ){
        continue;
    }
    for(let j=0;j<array[i];j++){
        str += `${i+1}\n`;
    }
}
console.log(str);