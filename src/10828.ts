import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `14
push 1
push 2
top
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
top`.split('\n');
}

let array: number[] = [];
let str = "";
for (let i = 1; i < input.length; i++) {
    let line = input[i].split(' ');
    let num : number | undefined;
    switch (line[0]) {
        case "push":
            array.push(+line[1]);
            break;
        case "pop":
            num = array.pop();
            str += `${num ? num : -1}\n`;
            break;
        case "size":
            str += `${array.length}\n`;
            break;
        case "empty":
            str += `${array.length == 0 ? "1":"0"}\n`;
            break;
        case "top":
            str += `${array.length> 0? array[array.length-1]:-1}\n`;
            break;
    }

}
console.log(str);