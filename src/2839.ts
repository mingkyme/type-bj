import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let input = ["7"];
let target = +input[0];

let length = 1;
let max = Math.ceil(target / 3);
let result = -1;
for (; length <= max; length++) {
    for (let i = length * 3; i <= length * 5; i += 2) {
        if (i == target) {
            result = length;
        }
    }
    if(result != -1){
        break;
    }
}
console.log(result);