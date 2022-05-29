import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `300000`.split('\n');
}
let num = +input[0];

let result = 25 + num / 100;
result = result < 2000 ? result : 2000;
result = result > 100 ? result : 100;

console.log(result.toFixed(2));
