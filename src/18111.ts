import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `2 2 35
20 10
190 40`.split('\n');
}
let h = +input[0].split(' ')[0];
let w = +input[0].split(' ')[1];
let myBlocks = +input[0].split(' ')[2];

let field = input.slice(1).map((n) => n.split(' ').map((n) => +n));

let fieldBlockCount = 0;
let min = 256;
let max = 0;
for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
        let value = field[i][j];
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
        fieldBlockCount += value;
    }
}


let canFlats: number[][] = [];
for (let i = min; i <= max; i++) {
    if ((myBlocks + fieldBlockCount) - (i * w * h) < 0) {
        continue;
    }
    let time = 0;
    for (let j = 0; j < h; j++) {
        for (let k = 0; k < w; k++) {
            if (field[j][k] > i) {
                time += 2 * (field[j][k] - i);
            } else if (field[j][k] < i) {
                time += 1 * (i - field[j][k]);

            }
        }
    }
    canFlats.push([time, i]);
}
canFlats.sort(function(a, b){
    if(a[0] == b[0]){
        return b[1] - a[1];
    }else{
        return a[0] - b[0];
    }
});
console.log(canFlats[0][0], canFlats[0][1]);