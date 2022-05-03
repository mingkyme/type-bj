import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `9 0 0 18 0 0
9 0 1 18 0 0
12 14 52 12 15 30`.split('\n');
}
for (let i = 0; i < 3; i++) {
    let line = input[i].split(' ').map((n) => +n);
    let startTime = line[0] * 3600 + line[1] * 60 + line[2];
    let endTime = line[3] * 3600 + line[4] * 60 + line[5];

    let workTime = endTime - startTime;
    console.log(`${Math.floor(workTime / 60 / 60 % 24)} ${Math.floor(workTime / 60 % 60)} ${workTime % 60}`)
}