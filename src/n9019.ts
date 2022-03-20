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
let commands = ["D","S","L","R"];
let str = "";
for (let i = 1; i < input.length; i++) {
    // let isChecked = new Array(10000).fill(false);
    let isChecked: boolean[] = [];

    isChecked.length = 10000;
    isChecked.fill(false);
    // for (let j = 0; j < 10000; j++) {
    //     isChecked[i] = false;
    // }
    let array: State[] = []; // Queue
    let now = +input[i].split(' ')[0];
    let target = +input[i].split(' ')[1];

    array.push({ num: now, command: [] });


    while (true) {
        let cur = array.shift()!;
        // if(isChecked[cur.num]){
        //     continue;
        // }
        // isChecked[cur.num] = true;
        if (cur.num == target) {
            str += `${cur.command.map((n)=>commands[n]).join('')}\n`;
            break;
        }
        let numD = D(cur.num);
        if (!isChecked[numD]) {
            isChecked[numD] = true;
            array.push({ num: numD, command: cur.command.concat(0) });
        }

        let numS = S(cur.num);
        if (!isChecked[numS]) {
            isChecked[numS] = true;
            array.push({ num: numS, command: cur.command.concat(1) });
        }

        let numL = L(cur.num);
        if (!isChecked[numL]) {
            isChecked[numL] = true;
            array.push({ num: numL, command: cur.command.concat(2) });
        }

        let numR = R(cur.num);
        if (!isChecked[numR]) {
            isChecked[numR] = true;
            array.push({ num: numR, command: cur.command.concat(3) });
        }
    }

}
console.log(str);

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
    let abc = Math.floor(num / 10);
    let d = num % 10;
    return d * 1000 + abc;
}

interface State {
    num: number
    command: number[]
}