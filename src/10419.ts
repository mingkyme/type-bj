import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `5
1
2
5
6
7`.split('\n');
}
for (let i = 1; i < input.length; i++) {
  let num = +input[i];
  let result = 0;
  for (let j = 1; j < Math.sqrt(num); j++) {
    if (j + j * j <= num) {
      result = j;
    } else {
      break;
    }
  }
  console.log(result);

}