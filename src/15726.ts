import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `32 16 8`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);

if (line[1] < line[2]) {
    console.log(Math.floor(line[0] / line[1] * line[2]));
} else {
    console.log(Math.floor(line[0] * line[1] / line[2]));
}