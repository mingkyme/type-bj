import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let input = `5 3 2
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 1 0 0
// 0 0 0 0 0`.split('\n')
let w = +input[0].split(' ')[0];
let h = +input[0].split(' ')[1];
let plateCount = +input[0].split(' ')[2];

let plate: number[][][] = [];
for (let i = 0; i < plateCount; i++) {
    let tempArray: number[][] = [];
    for (let j = 0; j < h; j++) {
        tempArray.push(input[1 + i * h + j].split(' ').map((n) => +n));
    }
    plate.push(tempArray);
}

let day = 0;
let lastPoints = new Set<number[]>();

for (let i = 0; i < plateCount; i++) {
    for (let j = 0; j < h; j++) {
        for (let k = 0; k < w; k++) {
            if (plate[i][j][k] == 1) {
                lastPoints.add([i, j, k]);
            }
        }
    }
}

while (true) {
    day++;

    let newPoints = new Set<number[]>();
    for (let i of lastPoints) {
        let x = i[0];
        let y = i[1];
        let z = i[2];
        if (plate[x][y][z] == 1) {
            if (x + 1 < plateCount && plate[x + 1][y][z] == 0) {
                newPoints.add([x + 1, y, z]);
                plate[x + 1][y][z] = 1;
            }
            if (x - 1 >= 0 && plate[x - 1][y][z] == 0) {
                newPoints.add([x - 1, y, z]);
                plate[x - 1][y][z] = 1;
            }
            if (y + 1 < h && plate[x][y + 1][z] == 0) {
                newPoints.add([x, y + 1, z]);
                plate[x][y + 1][z] = 1;
            }
            if (y - 1 >= 0 && plate[x][y - 1][z] == 0) {
                newPoints.add([x, y - 1, z]);
                plate[x][y - 1][z] = 1;
            }
            if (z + 1 < w && plate[x][y][z + 1] == 0) {
                newPoints.add([x, y, z + 1]);
                plate[x][y][z + 1] = 1;
            }
            if (z - 1 >= 0 && plate[x][y][z - 1] == 0) {
                newPoints.add([x, y, z - 1]);
                plate[x][y][z - 1] = 1;
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
for (let i = 0; i < plateCount; i++) {
    for (let j = 0; j < h; j++) {
        for (let k = 0; k < w; k++) {
            if (plate[i][j][k] == 0) {
                isDone = false;
                break;
            }
        }
        if (!isDone) {
            break;
        }
    }
    if (!isDone) {
        break;
    }
}

console.log(isDone ? day : -1);