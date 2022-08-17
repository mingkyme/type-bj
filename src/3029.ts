import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `20:00:00
04:00:00`.split('\n');
}
let lines = input.map((l) => l.split(':').map(Number));

let start = lines[0];
let end = lines[1];

let startTime = start[2] + start[1] * 60 + start[0] * 3600;
let endTime = end[2] + end[1] * 60 + end[0] * 3600;

let diff = endTime - startTime;

if (diff <= 0) {
  diff += 86400;
}

let sec = diff % 60;
let min = Math.floor(diff / 60) % 60;
let hour = Math.floor(diff / 60 / 60) % 60;

console.log(`${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
