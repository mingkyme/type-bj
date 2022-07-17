import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `4 12
5 5`.split('\n');
}
let lines = input.map((l) => l.split(' ').map((n) => +n));

let lifeA = Math.ceil(lines[0][1] / lines[1][0]);
let lifeB = Math.ceil(lines[1][1] / lines[0][0]);

if (lifeA == lifeB) {
  console.log("DRAW");

} else if (lifeA > lifeB) {
  console.log("PLAYER A");
} else {
  console.log("PLAYER B");

}