import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');


let targetCount = +input[0].split(' ')[1];
let givenArray = input.splice(1).map((n) => +n);

// let resultArray: number[] = [];

let length = Math.max(...givenArray);
let rangeMax = length;
let rangeMin = 0;
while (true) {
    if(rangeMin == rangeMax){
        break;
    }
    let count = 0;
    for (let i of givenArray) {

        count += Math.floor(i / length);
    }

    if (count >= targetCount) {
        rangeMin = length;
        length = Math.ceil((rangeMax+length) / 2);
    }else {
        rangeMax = length - 1;
        length = Math.floor((rangeMin+length) / 2);
    }
}
console.log(length);

// 제일 큰 number 를 기준으로 잘랐을 때 갯수 구함
// 부족하면 절반으로 나눔
// 절반 기준으로 갯수 구함

// 457 기준일 시
// 1 1 1 1 => 4개 가능

// 228 기준일 시
// 3 3 2 2 => 10개 가능

// 114 기준일 시
// 7 6 4 4 => 21개 가능

// 171 기준일 시
// 4 4 2 3 => 13개 가능

// 199 기준일 시
// 4 3 2 2 => 11개 가능

// 213 기준일 시
// 3 3 2 2 => 10개 가능

// 206 기준일 시
// 3 3 2 2 => 10개 가능

// 202 기준일 시
// 3 3 2 2 => 10개 가능

// 200 기준일 시
// 4 3 2 2 => 11개 가능

// 201 기준일 시
// 3 3 2 2 => 10개 가능