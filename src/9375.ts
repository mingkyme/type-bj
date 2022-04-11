import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`.split('\n');
}

let N = +input[0];
let idx = 1;

for(let n=0;n<N;n++){
    let count = +input[idx++];
    let map = new Map<string,number>();
    for(let i=0;i<count;i++){
        let line = input[idx++];
        let kind = line.split(' ')[1];

        if(map.has(kind)){
            map.set(kind,map.get(kind)!+1);
        }else{
            map.set(kind,1);
        }
    }
    let result = 1;
    map.forEach((val,key,map)=>{
        result *= val+1;
    });
    console.log(result-1);
}