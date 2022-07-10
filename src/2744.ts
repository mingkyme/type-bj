import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `WrongAnswer`.split('\n');
}

let result = "";

let line = input[0];
for (let i = 0; i < line.length; i++) {
  if (line[i] === line[i].toUpperCase()) {
    result += line[i].toLowerCase();
  } else {
    result += line[i].toUpperCase();
  }
}

console.log(result);
