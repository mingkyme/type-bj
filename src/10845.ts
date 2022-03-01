import fs = require("fs");
let input : string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else {
    input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split('\n');
}
let queue :number[]= [];
let result = "";
for (let i = 1; i < input.length; i++) {
    let line1 = input[i].split(' ');
    let command = line1[0];
    let num = +line1[1];
    switch (command) {
        case "push":
            queue.push(num);
            break;
        case "pop":
            let a = queue.shift();
            result += `${a ? a : "-1"}\n`;
            break;
        case "size":
            result += `${queue.length}\n`;
            break;
        case "empty":
            result += `${queue.length == 0 ? 1 : 0}\n`
            break;
        case "front":
            result += `${queue.length == 0 ? -1 : queue[0]}\n`;
            break;
        case "back":
            result += `${queue.length == 0 ? -1 : queue[queue.length - 1]}\n`;
            break;
    }
}
console.log(result);