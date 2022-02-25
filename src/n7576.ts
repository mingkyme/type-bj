import fs = require("fs");
const input: string[] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let plate: number[][] = input.splice(1).map((n) => n.split(' ').map((n)=>+n));


let day = 0;

let w = +input[0].split(' ')[0];
let h = +input[0].split(' ')[1];

while (true) {
    day++;
    let nextPlate: number[][] = [];
    
    // copy
    for(let i=0;i<h;i++){
        nextPlate[i] = plate[i].slice();
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (plate[i][j] == 1) {
                nextPlate[i][j] = 1;
                if (i + 1 < h) {
                    nextPlate[i + 1][j] = 1;
                }
                if (i - 1 >= 0) {
                    nextPlate[i - 1][j] = 1;
                }
                if (j + 1 < w) {
                    nextPlate[i][j + 1] = 1;
                }
                if (j - 1 >= 0) {
                    nextPlate[i][j - 1] = 1;
                }
            }
        }
    }

    for (let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            if(plate[i][j] == -1){
                nextPlate[i][j] = -1;
            }
        }
    }

    if (plate.flat().reduce((pre, cur, idx) => pre + cur) == nextPlate.flat().reduce((pre, cur, idx) => pre + cur)) {
        // 더 이상 진행 안됨.
        day--;
        if (nextPlate.flat().includes(0)) {
            day = -1;
        }
        break;
    }
    plate = nextPlate;
}
console.log(day);