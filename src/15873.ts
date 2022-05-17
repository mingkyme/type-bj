import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `102`.split('\n');
}
let line = input[0];
if (line.length == 2) {
    console.log(+line[0] + +line[1]);
} else if (line.length == 3) {
    if (line[1] == "0") {
        console.log(10 + +line[2]);
    } else {
        console.log(+line[0] + 10);
    }
} else { // length 4
    console.log(+line.slice(0, 2) + +line.slice(2, 4));
}