import fs = require("fs");
const input: string[] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split('\n');


console.log(input.splice(1).sort(function (a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return a > b ? 1 : -1;
}).filter((val,idx,arr)=>arr.indexOf(val)==idx).join("\n"));