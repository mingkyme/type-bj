import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `4
1234 3412
1000 1
1 16`.split('\n');
}


for (let i = 1; i < input.length; i++) {
    let isChecked = new Array(10000).fill(false);
    let array: State[] = []; // Queue
    let now = +input[i].split(' ')[0];
    let target = +input[i].split(' ')[1];

    array.push({ num: now, command: "" });

    while (true) {
        let cur = array.shift()!;
        if(isChecked[cur.num]){
            continue;
        }
        isChecked[cur.num] = true;
        if (cur?.num == target) {
            console.log(cur.command);
            break;
        }
        array.push({ num: D(cur?.num!), command: cur?.command.concat("D") });
        // if(isChecked[cur.num]){
        // }
        array.push({ num: S(cur?.num!), command: cur?.command.concat("S") });
        // if(isChecked[cur.num]){
        // }
        array.push({ num: L(cur?.num!), command: cur?.command.concat("L") });
        // if(isChecked[cur.num]){
        // }
        array.push({ num: R(cur?.num!), command: cur?.command.concat("R") });
        // if(isChecked[cur.num]){
        // }
    }

}

function D(num: number): number {
    return (num * 2) % 10000;
}
function S(num: number): number {
    return (9999 + num) % 10000;
}
function L(num: number): number {
    let a = Math.floor(num / 1000);
    let bcd = num % 1000;
    return bcd * 10 + a;
}
function R(num: number): number {
    let abc = Math.floor(num/10);
    let d = num % 10;
    return d*1000+abc;
}

interface State {
    num: number
    command: string
}