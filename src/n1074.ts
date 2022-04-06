import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10 512 512`.split('\n');
}
let line = input[0].split(' ').map((n) => +n);

let N = line[0];
let r = line[1];
let c = line[2];
let result = 0;

SetNumber(N, r, c);
console.log(result);

function SetNumber(N: number, r: number, c: number) {
    if (N == 0) {
        return;
    }
    let n2 = Math.pow(2, N - 1);
    let n4 = Math.pow(4, N - 1);
    if (r < n2 && c < n2) {
        // 좌 상
        result += 0;
        SetNumber(N-1, r, c);

    } else if (r < n2 && c >= n2) {
        // 좌 하
        result += n4;
        SetNumber(N-1, r, c - n2);

    } else if (r >= n2 && c < n2) {
        // 우 상
        result += n4 * 2;
        SetNumber(N-1, r - n2, c);

    } else {
        // 우 하
        result += n4 * 3;
        SetNumber(N-1, r - n2, c - n2);

    }

}
