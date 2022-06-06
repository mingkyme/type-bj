import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3 3`.split('\n');
}
let n1 = +input[0].split(" ")[0];
let n2 = +input[0].split(" ")[1];

if (n2 <= 2) {
    console.log("NEWBIE!");
} else if (n2 <= n1) {
    console.log("OLDBIE!");
} else {
    console.log("TLE!");
}