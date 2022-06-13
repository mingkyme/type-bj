import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `60
70
50`.split('\n');
}
let numbers = input.map((n) => +n);
if (numbers[0] == 60 && numbers[1] == 60 && numbers[2] == 60) {
  console.log("Equilateral");
} else if (numbers[0] + numbers[1] + numbers[2] != 180) {
  console.log("Error");
} else if (numbers[0] == numbers[1] || numbers[0] == numbers[2] || numbers[1] == numbers[2]) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}