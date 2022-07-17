import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `5551212`.split('\n');
}
console.log(input[0].startsWith("555") ? "YES" : "NO");
