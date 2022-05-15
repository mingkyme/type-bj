import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `11172`.split('\n');
}
let num = +input[0];
console.log(String.fromCharCode(44031 + num));
