import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10`.split('\n');
}
console.log(factorial(+input[0]));
function factorial(n: number): number {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}