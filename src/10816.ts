import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split('\n');
}

let myCards = input[1].split(' ').map((n) => +n);
let countCards = input[3].split(' ').map((n) => +n);
let map = new Map<number, number>();
for (let i = 0; i < myCards.length; i++) {
    if (map.has(myCards[i])) {
        map.set(myCards[i], map.get(myCards[i])! + 1)
    } else {
        map.set(myCards[i], 1);
    }
}

let str = "";
for (let i = 0; i < countCards.length; i++) {
    if(map.has(countCards[i])){
        str += `${map.get(countCards[i])} `;
    }else{
        str += `0 `;
    }
}

console.log(str);