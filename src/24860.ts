import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `40 5
41 6
50 30 6`.split('\n');
}
let numArray: number[] = [];
numArray.push(+input[0].split(' ')[0])
numArray.push(+input[0].split(' ')[1])
numArray.push(+input[1].split(' ')[0])
numArray.push(+input[1].split(' ')[1])
numArray.push(+input[2].split(' ')[0])
numArray.push(+input[2].split(' ')[1])
numArray.push(+input[2].split(' ')[2])

let n1 = numArray[0] * numArray[1];
let n2 = numArray[2] * numArray[3];
let n3 = numArray[4] * numArray[5] * numArray[6];

console.log(n3 * (n1 + n2));
