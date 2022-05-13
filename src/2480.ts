import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `3 3 6`.split('\n');
}

let nums = input[0].split(' ').map((n) => +n);

if(nums[0] == nums[1] && nums[1] == nums[2]){
    console.log(10000 + 1000 * nums[0]);
}else if(nums[0] == nums[1] || nums[1] == nums[2] || nums[0] == nums[2]){
    let sameNum = 0;
    if(nums[0] == nums[1]){
        sameNum = nums[0];
    } else if(nums[0] == nums[2]){
        sameNum = nums[0];
    }else{
        sameNum = nums[1];
    }
    console.log(1000 + 100 * sameNum);
}else{
    console.log(Math.max(...nums) * 100);
}