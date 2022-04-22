import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `10`.split('\n');
}

console.log(fibonacci(+input[0]));

function fibonacci(num: number): number {
    if (num == 0) {
        return 0;
    }
    else if (num == 1 || num == 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}