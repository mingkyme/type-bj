import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split('\n');
}

for (let i = 0; i < input.length-1; i++) {
    let stack: string[] = [];
    let line = input[i];
    let isComplete = true;
    for (let j = 0; j < line.length; j++) {
        let char = line[j];
        if (char == "(") {
            stack.push("(");
        } else if (char == ")") {
            let last = stack.pop();
            if (last && last == "(") {
                continue;
            } else {
                isComplete = false;
                break;
            }
        }
        else if (char == "[") {
            stack.push("[");
        }
        else if (char == "]") {
            let last = stack.pop();
            if (last && last == "[") {
                continue;
            } else {
                isComplete = false;
                break;
            }
        }
    }
    console.log(stack.length == 0 && isComplete ? "yes" : "no")
}