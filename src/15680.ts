import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `1`.split('\n');
}
let n = +input[0];
if (n == 0) {
  console.log("YONSEI");

} else {
  console.log("Leading the Way to the Future");

}