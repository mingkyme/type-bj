import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `5
1 250 10 15 20
2 10.7 3.5 4.7 5.5
3 523.7 15.3 20.7 33.3
4 1000 30 30 50
5 500 15 15 25`.split('\n');
}

let result = "";
for (let i = 1; i < input.length; i++) {
  let line = input[i].split(' ').map((n) => +n);
  let value = line[1] / (line[2] + line[3]) * line[4];
  result += `${i} ${value.toFixed(6)}\n`
}
console.log(result);
