import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `80 20 40
45 23 48`.split('\n');
}
let lines = input.map((l)=>l.split(' ').map((n)=>+n));
let num1 = lines[1][0] - lines[0][0];
let num2 = lines[1][1] - lines[0][1];
let num3 = lines[1][2] - lines[0][2];

let result = (num1 > 0 ? num1 : 0 )+ (num2 > 0 ? num2 : 0) + (num3 > 0 ? num3 : 0);
console.log(result);
