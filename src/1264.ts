import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `How are you today?
Quite well, thank you, how about yourself?
I live at number twenty four.
#`.split('\n');
}

for (let i = 0; i < input.length - 1; i++) {
  let line = input[i];
  let result = line.match(/[AEIOUaeiou]/g);
  console.log(result ? result.length : 0);
}