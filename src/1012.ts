import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`.split('\n');
}

let N = +input[0];
let idx = 1;
for (let n = 0; n < N; n++) {
    let line = input[idx++].split(' ').map((n) => +n);
    let h = line[0];
    let w = line[1];
    let caseCount = line[2];

    let field: boolean[][] = [];
    for (let i = 0; i < w; i++) {
        field.push([]);
        for (let j = 0; j < h; j++) {
            field[i].push(false);
        }
    }
    for (let i = 0; i < caseCount; i++) {
        let pos = input[idx++].split(' ').map((n) => +n);
        field[pos[1]][pos[0]] = true;
    }

    let result = 0;
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            if (field[i][j] == true) {
                let queue: number[][] = [];
                queue.push([i, j]);
                result++;
                while (queue.length > 0) {
                    let xy = queue.shift()!;
                    let x = xy[0];
                    let y = xy[1];
                    if (!field[x][y]) {
                        continue;
                    }
                    field[x][y] = false;
                    if (x > 0 && field[x - 1][y]) {
                        queue.push([x - 1, y]);
                    }
                    if (y < h - 1 && field[x][y + 1]) {
                        queue.push([x, y + 1]);
                    }
                    if (x < w - 1 && field[x + 1][y]) {
                        queue.push([x + 1, y]);
                    }
                    if (y > 0 && field[x][y - 1]) {
                        queue.push([x, y - 1]);
                    }
                }
            }
        }
    }
    console.log(result);
}