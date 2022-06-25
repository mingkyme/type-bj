import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1000`.split('\n');
}
let num = +input[0];
let array = [2, 1, 2, 3, 4, 5, 4, 3];
console.log(array[num % 8]);
