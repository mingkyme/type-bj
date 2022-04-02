import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`.split('\n');
}

let N = +input[0];
let field = input.splice(1).map((n) => n.split(' ').map((n) => +n));
let COUNT = N;

let count0 = 0;
let count1 = 0;
while (N >= 1) {
    for (let i = 0; i < COUNT; i += N) {
        for (let j = 0; j < COUNT; j += N) {
            let temp = field.slice(i, i + N).map((n) => n.slice(j, j + N));
            let sum = GetSum(temp);
            if (sum == 0 || sum == N * N) {
                if (sum == 0) {
                    count0++;
                } else {
                    count1++;
                }

                for (let k = i; k < i + N; k++) {
                    for (let l = j; l < j + N; l++) {
                        field[k][l] = -1;
                    }
                }
            }
        }
    }
    N /= 2;
}
console.log(count0);
console.log(count1);

function GetSum(arr: number[][]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}