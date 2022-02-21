import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// const input : string[] = ["3","1 0","5","4 2","1 2 3 4","6 0","1 1 9 1 1 1"]
for (let i = 1; i < input.length; i += 2) {
    let count = +input[i].split(' ')[0];
    let idx = +input[i].split(' ')[1];

    let arr = input[i + 1].split(' ').map((n) => +n);
    let arrow = 0;
    while (true) {
        if (arr[arrow] == Math.max(...arr)) {
            arr[arrow] = -1;
            if (arrow == idx) {
                console.log(arr.filter((val, idx, arr) => val == -1).length);
                break;
            }
            arrow = (arrow + 1) % count;
        } else {
            arrow = (arrow + 1) % count;
        }

    }
}