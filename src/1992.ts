import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4
0000
0000
0000
0000`.split('\n');
}
let size = +input[0];
input = input.splice(1);
let arr = input.map((n) => n.split('').map((m) => +m));

let str = "";
let sum = arr.reduce((pre, cur, idx) => pre + cur.reduce((pre, cur, idx) => pre + cur), 0);
if (sum == 0) {
    console.log("0");
} else if (sum == size * size) {
    console.log("1");
} else {

    for (let i = 0; i < size; i += size / 2) {
        for (let j = 0; j < size; j += size / 2) {
            str += Zip(arr.slice(i, i + size / 2).map((n) => n.slice(j, j + size / 2)));
        }
    }
    console.log(`(${str})`);
}

function Zip(array: number[][]): string {
    let str = "";
    let size = array.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            sum += array[i][j];
        }
    }
    if (sum == 0 || sum == size * size) {
        if (sum == 0) {
            str = "0";
        } else {
            str = "1";
        }
    } else {
        str += "(";
        for (let k = 0; k < array.length; k += size / 2) {
            for (let l = 0; l < array.length; l += size / 2) {
                str += `${Zip(array.slice(k, k + size / 2).map((n) => n.slice(l, l + size / 2)))}`;
            }
        }
        str += ")";
    }
    return str;
}