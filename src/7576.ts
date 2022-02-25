import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let input = `5 5
// 1 0 0 0 1
// 0 -1 -1 -1 0
// 0 -1 -1 -1 0
// 0 -1 -1 -1 0
// 1 0 0 0 0`.split('\n')
let plate: number[][] = input.splice(1).map((n) => n.split(' ').map((n) => +n));


let day = 0;

let w = +input[0].split(' ')[0];
let h = +input[0].split(' ')[1];

let lastPoints= new Set<number[]>();

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        if (plate[i][j] == 1) {
            lastPoints.add([i, j]);
        }
    }
}
while (true) {
    day++;

    let newPoints = new Set<number[]>();
    for (let i of lastPoints) {
        let x = i[0];
        let y = i[1];

        if (plate[x][y] == 1) {
            plate[x][y] = 1;
            if (x + 1 < h && plate[x + 1][y] == 0) {
                newPoints.add([x + 1, y]);
                plate[x+1][y] = 1;
            }
            if (x - 1 >= 0 && plate[x - 1][y] == 0) {
                newPoints.add([x - 1, y]);
                plate[x-1][y] = 1;
            }
            if (y + 1 < w && plate[x][y + 1] == 0) {
                newPoints.add([x, y + 1]);
                plate[x][y+1] = 1;
            }
            if (y - 1 >= 0 && plate[x][y - 1] == 0) {
                newPoints.add([x, y - 1]);
                plate[x][y-1] = 1;
            }
        }
    }

    // for (let i of newPoints){
    //     let x = i[0];
    //     let y = i[1];
    //     plate[x][y] = 1;
    // }
    lastPoints = newPoints;


    if (lastPoints.size == 0) {
        day--;
        break;
    }

}
let isDone = true;
for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        if (plate[i][j] == 0) {
            isDone = false;
            break;
        }
    }
    if (!isDone) {
        break;
    }
}
console.log(isDone ? day : -1);