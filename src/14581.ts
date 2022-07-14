import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `h0ngjun7`.split('\n');
}
console.log(`:fan::fan::fan:
:fan::${input[0]}::fan:
:fan::fan::fan:`);
