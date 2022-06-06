import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `5
10 8
-7 9 2 -4 12 1 5 -3 -2 0
10 4
-7 9 2 -4 12 1 5 -3 -2 0
4 20
1 7 3 5
5 10
3 9 7 1 5
10 1
-7 9 2 -4 12 1 5 -3 -2 0`.split('\n');
}
let N = +input[0];
let now = 1;
for (let i = 0; i < N; i++) {
    let line1 = input[now++].split(' ').map((n) => +n);
    let line2 = input[now++].split(' ').map((n) => +n);

    let target = line1[1];

    line2.sort((a, b) => a - b);

    let lp = 0; // left pointer
    let rp = line2.length - 1; // right pointer

    let result = 0;
    let interval = 9999999999;
    while (lp < rp) {
        let sum = line2[lp] + line2[rp];
        let diff = Math.abs(target - sum);
        if (diff < interval) {
            interval = diff;
            result = 1;
        } else if (diff == interval) {
            result++;
        }

        if (sum > target) {
            rp--;
        } else if (sum == target) {
            lp++;
            rp--;
        } else {
            lp++;
        }
    }
    console.log(result);

}
