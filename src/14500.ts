import * as fs from 'fs';
const input:string[] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let w :number= +input[0].split(' ')[0];
let h :number= +input[0].split(' ')[1];

let field : number[][] = [];
for(let i=1;i<input.length;i++){
    field.push(input[i].split(' ').map((n)=>+n))
}
let target = [
    0,0,0,
    0,0,0,
    0,0,0
]
let resultList:number[] = [];
for(let i=2;i<w;i++){
    for(let j=2;j<h;j++){
        target[0] = field[i-2][j-2];
        target[1] = field[i-2][j-1];
        target[2] = field[i-2][j];

        target[3] = field[i-1][j-2];
        target[4] = field[i-1][j-1];
        target[5] = field[i-1][j];

        target[6] = field[i][j-2];
        target[7] = field[i][j-1];
        target[8] = field[i][j];
        
        resultList.push(shape1(target));
        resultList.push(shape2(target));
        resultList.push(shape3(target));
        resultList.push(shape4(target));
    }
}

for(let i=3;i<w;i++){
  for(let j=0;j<h;j++){
    resultList.push(field[i-3][j] +field[i-2][j] + field[i-1][j] + field[i][j])
  }
}
for(let i=0;i<w;i++){
  for(let j=3;j<h;j++){
    resultList.push(field[i][j-3] +field[i][j-2] + field[i][j-1] + field[i][j])
  }
}

console.log(resultList.reduce((pre,cur)=>pre>cur?pre:cur));

function shape1(target : number[]):number{
    let shapeArray = ["100100110","010010011","010010110","001001011","110100100","011010010","111100000","000111100","111001000","000111001","100111000","000100111","000001111","001111000","011001001","110010010"]
    let resultList :number[]= [];
    for(let i=0;i<shapeArray.length;i++){
        let sum = 0;
        for(let j=0;j<shapeArray[i].length;j++){
          if(shapeArray[i][j] == "1"){
            sum += target[j];
          }
        }
      resultList.push(sum);
    }
    return Math.max(...resultList);
}
function shape2(target : number[]):number{
    let shapeArray= ["100110010","010011001","010110100","001011010","110011000","000110011","011110000","000011110"]
    let resultList :number[]= [];
    for(let i=0;i<shapeArray.length;i++){
        let sum = 0;
        for(let j=0;j<shapeArray[i].length;j++){
          if(shapeArray[i][j] == "1"){
            sum += target[j];
          }
        }
      resultList.push(sum);
    }
    return Math.max(...resultList);
}
function shape3(target : number[]):number{
    let shapeArray = ["010111000","000010111","100110100","010011010","010110010","001011001","111010000","000111010"]
    let resultList :number[]= [];
    for(let i=0;i<shapeArray.length;i++){
        let sum = 0;
        for(let j=0;j<shapeArray[i].length;j++){
          if(shapeArray[i][j] == "1"){
            sum += target[j];
          }
        }
      resultList.push(sum);
    }
    return Math.max(...resultList);
}
function shape4(target : number[]):number{
  let shapeArray = ["000000000","110110000","011011000","000110110","000011011"];
  let resultList :number[]= [];
    for(let i=0;i<shapeArray.length;i++){
        let sum = 0;
        for(let j=0;j<shapeArray[i].length;j++){
          if(shapeArray[i][j] == "1"){
            sum += target[j];
          }
        }
      resultList.push(sum);
    }
    return Math.max(...resultList);
}