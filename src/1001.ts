"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[0].split(' ');
let n1 = +input[0];
let n2 = +input[1];
console.log(n1 - n2);
