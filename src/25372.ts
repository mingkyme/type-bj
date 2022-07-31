import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `3
1245125
asdij
120318739721`.split('\n');
}

for (let i = 1; i < input.length; i++) {
  console.log(input[i].length >= 6 && input[i].length <= 9 ? "yes" : "no");

}