import fs = require("fs");
let input : string[];
if(process.platform == 'linux'){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}else{
    input = `5
3 4
1 1
1 -1
2 2
3 3`.split('\n');
}

console.log(input.slice(1).map((n)=>n.split(' ')).sort(function(a,b){
    if(a[0] == b[0]){
        return +a[1]- +b[1];
    }else{
        return +a[0] - +b[0];
    }
}).map((n)=>n.join(' ')).join('\n'));