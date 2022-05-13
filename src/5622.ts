import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `UNUCIC`.split('\n');
}

let map = new Map<string,number>();

map.set("A",3);
map.set("B",3);
map.set("C",3);

map.set("D",4);
map.set("E",4);
map.set("F",4);

map.set("G",5);
map.set("H",5);
map.set("I",5);

map.set("J",6);
map.set("K",6);
map.set("L",6);

map.set("M",7);
map.set("N",7);
map.set("O",7);

map.set("P",8);
map.set("Q",8);
map.set("R",8);
map.set("S",8);

map.set("T",9);
map.set("U",9);
map.set("V",9);

map.set("W",10);
map.set("X",10);
map.set("Y",10);
map.set("Z",10);

let num = input[0].split('').map((n)=>map.get(n)!).reduce((pre,cur,idx)=>pre+cur);

console.log(num);