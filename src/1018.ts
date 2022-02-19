import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');

let nm = input[0].split(' ');
let givenChess = input.slice(1, input.length).map((n) => n.split(''))


let array: number[] = [];

// N x M 으로 이뤄진 체스판을 2개 준비 (W, B 으로 시작)
let answer1: string[][] = [];
let answer2: string[][] = [];
for (let i = 0; i < +nm[0]; i++) {
    answer1.push([]);
    answer2.push([]);
    for (let j = 0; j < +nm[1]; j++) {
        answer1[i].push((i+j)%2 ==0 ? "W" : "B");
        answer2[i].push((i+j)%2 ==1 ? "W" : "B");
    }
}

// 8 x 8 로 잘라서 정답판 2개와 다른 갯수를 찾아서 Array 에 넣기
for (let i = 7; i < givenChess.length; i++) {
    for (let j = 7; j < givenChess[i].length; j++) {
        let countForAnswer1 = 0;
        let countForAnswer2 = 0;
        for (let k = i-7; k <=i; k++) {
            for (let l = j-7; l <= j; l++) {
                if (givenChess[k][l] != answer1[k][l]) {
                    countForAnswer1++;
                }
                if (givenChess[k][l] != answer2[k][l]) {
                    countForAnswer2++;
                }
            }
        }
        array.push(countForAnswer1, countForAnswer2);
    }
}
// Array 에 넣은 값 중 Math.min 값으로 출력
console.log(Math.min(...array));