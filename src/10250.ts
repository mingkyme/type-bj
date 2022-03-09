import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `3
6 12 10
6 12 6
30 50 72`.split('\n');
}

for(let i=1;i<input.length;i++){
    let line = input[i].split(' ').map((n)=>+n);
    let n1 = ((line[2]-1) % (line[0]))+1;
    let n2 = Math.ceil((line[2]) / line[0]);
    let n2String = n2.toString().padStart(2,'0');

    console.log(`${n1}${n2String}`);

}