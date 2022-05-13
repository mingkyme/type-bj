import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `800
700
900
198
330`.split('\n');
}
let prices = input.map((n) => +n);
let hambugerPrices = prices.slice(0, 3);
let drinkPrices = prices.slice(3);

console.log(Math.min(...hambugerPrices) + Math.min(...drinkPrices) - 50);