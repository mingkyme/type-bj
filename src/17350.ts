import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3
snrn
anj
ahffk`.split('\n');
}
let isAnj = false;
for (let i = 1; i < input.length; i++) {
  if (input[i] == "anj") {
    isAnj = true;
    break;
  }
}
console.log(isAnj ? "뭐야;" : "뭐야?");
