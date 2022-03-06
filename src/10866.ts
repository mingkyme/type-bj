import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`.split('\n');
}

let str = "";
let array: number[] = [];
let num : number | undefined;
for (let i = 1; i < input.length; i++) {
    let line = input[i].split(' ');

    switch (line[0]) {
        case "push_front":
            array = [+line[1], ...array];
            break;
        case "push_back":
            array.push(+line[1]);
            break;
        case "pop_front":
            num = array.shift();
            str += `${num?num:-1}\n`;
            break;
        case "pop_back":
            num = array.pop();
            str += `${num?num:-1}\n`;
            break;
        case "size":
            str += `${array.length}\n`;
            break;
        case "empty":
            str += `${array.length == 0 ? 1:0}\n`;
            break;
        case "front":
            str += `${array.length>0?array[0]:-1}\n`;
            break;
        case "back":
            str += `${array.length>0?array[array.length-1]:-1}\n`;
            break;
    }
}
console.log(str);