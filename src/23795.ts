import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1
2
3
4
5
6
7
8
9
10
-1`.split('\n');
}
console.log(input.map((l)=>+l).reduce((pre,cur,idx)=>pre+cur)+1);
