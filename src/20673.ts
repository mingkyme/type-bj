import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
  input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
  input = `50
7`.split('\n');
}
let nums = input.map((n) => +n);

if(nums[0] <= 50 && nums[1] <= 10){
  console.log("White");
  
}else if(nums[1] > 30){
  console.log("Red");

}else{
  console.log("Yellow");

}