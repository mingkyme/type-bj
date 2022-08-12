import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `2 3 4 5
4 9 5`.split('\n');
}
let lines = input.map((l) => l.split(' ').map((n) => +n));

let n1 = lines[0][0];
let n2 = lines[0][1];
let n3 = lines[0][2];
let n4 = lines[0][3];

let m1 = lines[1][0]-1;
let m2 = lines[1][1]-1;
let m3 = lines[1][2]-1;

console.log((m1 % (n1 + n2) < n1 ? 1 : 0) + (m1 % (n3 + n4) < n3 ? 1 : 0));
console.log((m2 % (n1 + n2) < n1 ? 1 : 0) +( m2 % (n3 + n4) < n3 ? 1 : 0));
console.log((m3 % (n1 + n2) < n1 ? 1 : 0) + (m3 % (n3 + n4) < n3 ? 1 : 0));
