import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1
1`.split('\n');
}
let num = +input[0];
if (num == 0) {
    console.log("divide by zero");
} else {
    console.log("1.00");
}
