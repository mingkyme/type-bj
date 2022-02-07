import fs = require("fs");
const input: string[] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let target = +input[0];
let brokenCount = +input[1];
let brokenList: number[] = [];
if (brokenCount > 0) {
  brokenList = input[2].split(" ").map((n) => +n);
}
var canUseNumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
canUseNumberList = canUseNumberList.filter((n) => brokenList.indexOf(n) == -1);

var combineNumbers = [];
var targetLength = target.toString().length;
combineNumbers = [100]; // 현재 채널
combineNumbers.push(...getAllCombines(canUseNumberList, targetLength));
if (canUseNumberList.length > 0) {

  combineNumbers.push(getMaxCombine(canUseNumberList, targetLength - 1));
  combineNumbers.push(getMinCombine(canUseNumberList, targetLength + 1));
}
let distance = combineNumbers.map((n) =>
  target > n
    ? target - n + n.toString().length
    : n - target + n.toString().length
);
distance.push(Math.abs(100 - target));
console.log(Math.min(...distance));

function getAllCombines(arr: number[], r: number): number[] {
  let res: number[] = [];
  let tmp: number[] = [];
  function DFS(L: number) {
    if (L === r) {
      let a = Number(tmp.slice().join(""));
      res.push(a);
    } else {
      for (let i = 0; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  res = res.filter((n) => n.toString().length == r);
  return res;
}

function getMaxCombine(arr: number[], r: number): number {
  var max = arr.reduce((previous, current) => { return previous > current ? previous : current; });
  let result = 0;
  for (let i = 1; i < r; i++) {
    result += max;
    result *= 10;
  }
  result += max;
  return result;
}

function getMinCombine(arr: number[], r: number): number {
  var min = arr.reduce((previous, current) => { return previous < current ? previous : current; });
  let result = 0;
  for (let i = 0; i < r; i++) {
    if (min == 0 && i == 0) {
      if (arr.length > 1) {
        result += arr.filter((n) => n != 0).reduce((previous, current) => previous < current ? previous : current);
      }
    }
    result += min;
    result *= 10;
  }
  result /= 10;
  return result;
}
