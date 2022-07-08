import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `baekjoon`.split('\n');
}
let result = "";
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    let temp = input[0].match(new RegExp(String.fromCharCode(i), "g"))?.length;

    result += `${temp ? temp : "0"} `;
}
console.log(result);
