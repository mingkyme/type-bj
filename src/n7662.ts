import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `2
7
I 16
I -5643
D -1
D 1
D 1
I 123
D -1
9
I -45
I 653
D 1
I -642
I 45
I 97
D 1
D -1
I 333`.split('\n');
}
let result = "";
let N = +input.shift()!;
for (let i = 0; i < N; i++) {
    let M = +input.shift()!;
    // let array: number[] = [];

    let map = new Map<number, number>()
    for (let j = 0; j < M; j++) {
        let command = input.shift()!.split(' ');
        let num = +command[1];
        if (command[0] == "I") {
            if (!map.has(num)) {
                map.set(num, 0);
            }
            map.set(num, map.get(num)! + 1);
            // array.push(num);
        } else {
            if (map.size == 0) {
                continue;
            }
            if (num == 1) {
                let max = Math.max(...map.keys())!;
                map.set(max, map.get(max)! - 1);
                if (map.get(max) == 0) {
                    map.delete(max);
                }
                // array.sort((a, b) => a - b);
                // array.pop();
            } else {
                let min = Math.min(...map.keys())!;
                map.set(min, map.get(min)! - 1);
                if (map.get(min) == 0) {
                    map.delete(min);
                }
                // array.sort((a, b) => b - a);
                // array.pop();
            }
        }
    }

    if (map.size > 0) {
        // 최대 최소
        let min = Math.min(...map.keys());
        let max = Math.max(...map.keys());
        result += `${max} ${min}\n`;
    } else {
        result += `EMPTY\n`;
    }
}
console.log(result);