import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `30 35 30 35`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);
let n1 = line[0] - 1;
let n2 = line[1] - 1;
let n3 = line[2];
let n4 = line[3];

if (n1 > n3 && n2 > n4) {
    console.log(1);
} else {
    console.log(0);
}