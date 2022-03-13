import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`.split('\n');
}
let lc = +input[0];
let RGB = input.slice(1).map((n) => n.split(''));

let RB = input.slice(1).map((n) => n.split('').filter((n)=>n=="G"?"R":"B"));
for (let i = 0; i < lc; i++) {
    for (let j = 0; j < lc; j++) {
        if (RB[i][j] == "G") {
            RB[i][j] = "R"
        }
    }
}

let visited :boolean[][] = [];
for(let i =0;i<lc;i++){
    let temp : boolean[] = [];
    for(let j=0;j<lc;j++){
        temp.push(false);
    }
    visited.push(temp);
}

let rgbCount = 0;
for (let i = 0; i < lc; i++) {
    for (let j = 0; j < lc; j++) {
        if(visited[i][j]){
            continue;
        }
        let queue: number[][] = [];
        queue.push([i, j]);
        rgbCount++;
        while (queue.length > 0) {
            let temp = queue.shift()!;
            if(visited[temp[0]][temp[1]]){
                continue;
            }
            visited[temp[0]][temp[1]] = true
            if (temp[0] > 0 && RGB[temp[0]][temp[1]] == RGB[temp[0] - 1][temp[1]]){
                queue.push([temp[0] - 1, temp[1]]);
            }
            if (temp[1] > 0 && RGB[temp[0]][temp[1]] == RGB[temp[0] ][temp[1]-1]){
                queue.push([temp[0], temp[1]-1]);
            }
            if (temp[0] + 1 < lc && RGB[temp[0]][temp[1]] == RGB[temp[0] + 1][temp[1]]) {
                queue.push([temp[0] + 1, temp[1]]);
            }
            if (temp[1] + 1 < lc&& RGB[temp[0]][temp[1]] == RGB[temp[0]][temp[1]+1]) {
                queue.push([temp[0], temp[1] + 1]);

            }
        }
    }
}

for(let i =0;i<lc;i++){
    for(let j=0;j<lc;j++){
        visited[i][j]=false;
    }
}

let rbCount = 0;
for (let i = 0; i < lc; i++) {
    for (let j = 0; j < lc; j++) {
        if(visited[i][j]){
            continue;
        }
        let queue: number[][] = [];
        queue.push([i, j]);
        rbCount++;
        while (queue.length > 0) {
            let temp = queue.shift()!;
            if(visited[temp[0]][temp[1]]){
                continue;
            }
            visited[temp[0]][temp[1]] = true
            if (temp[0] > 0 && RB[temp[0]][temp[1]] == RB[temp[0] - 1][temp[1]]){
                queue.push([temp[0] - 1, temp[1]]);
            }
            if (temp[1] > 0 && RB[temp[0]][temp[1]] == RB[temp[0] ][temp[1]-1]){
                queue.push([temp[0], temp[1]-1]);
            }
            if (temp[0] + 1 < lc && RB[temp[0]][temp[1]] == RB[temp[0] + 1][temp[1]]) {
                queue.push([temp[0] + 1, temp[1]]);
            }
            if (temp[1] + 1 < lc&& RB[temp[0]][temp[1]] == RB[temp[0]][temp[1]+1]) {
                queue.push([temp[0], temp[1] + 1]);

            }
        }
    }
}
console.log(`${rgbCount} ${rbCount}`)