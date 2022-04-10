import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3 4
1 3
1 1
1 2
2 1 2
3 1 2 3`.split('\n');
}
let line1 = input[0].split(" ").map((n) => +n);
let peopleCount = line1[0];
let partCount = line1[1];

let truthPeople = input[1].split(' ').slice(1).map((n) => +n);

let array: number[] = [];
for (let i = 0; i < peopleCount; i++) {
    array.push(i);
}
// console.log(array);
for (let i = 2; i < input.length; i++) {
    let line = input[i].split(' ').slice(1).map((n) => +n);
    line.sort((a, b) => a - b);
    let parent = getParent(line[0]);

    for (let j = 0; j < line.length; j++) {
        array[line[j]-1] = parent;
    }
}
console.log(array);
function getParent(idx: number): number {
    if (array[idx -1] == idx - 1) {
        return idx;
    } else {
        return getParent(array[idx]);
    }
}