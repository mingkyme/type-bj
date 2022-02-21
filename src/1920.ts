const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = '';
let lines :string[]= [];
rl.on('line', (line: string) => {
    lines.push(line);
}).on('close', () => {
    let targetArray = lines[1].split(' ').map((n) => +n);
    let findArray = lines[3].split(' ').map((n) => +n);
    let set = new Set(targetArray)
    console.log(findArray.map((n)=>set.has(n)?1:0).join('\n'));
  process.exit();
})