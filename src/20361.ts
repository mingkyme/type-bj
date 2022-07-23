import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3 2 4
1 3
3 2
3 1
2 3`.split('\n');
}

let now = +input[0].split(' ')[1];
for (let i = 1; i < input.length; i++) {
  let line = input[i].split(' ').map((n) => +n);
  if (line[0] == now) {
    now = line[1];
  } else if (line[1] == now) {
    now = line[0];
  }

}
console.log(now);
