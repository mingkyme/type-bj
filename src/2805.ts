import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let input = ["4 7 ","20 15 10 17"]
// let input = ["5 20 ","4 42 40 26 46"]
// let input = ["2 11 ", "10 10"]
let need = +input[0].split(' ')[1];
let trees = input[1].split(' ').map((n) => +n);

let max = Math.max(...trees);
let min = 0;

let resultArray = [];
while (min <= max) {
    let cur = Math.floor((min + max) / 2);
    let sum = 0;
    for (let i of trees) {
        let rest = i - cur;
        sum += rest > 0 ? rest : 0;
    }
    if (sum >= need) {
        resultArray.push(cur);
        min = cur + 1;
    } else {
        max = cur - 1;
    }

    if (cur == min && cur == max) {
        break;
    }
}

console.log(resultArray.sort((a, b) => b - a)[0]);