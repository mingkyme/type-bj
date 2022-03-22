import fs = require("fs");
let input: string[];
if (process.platform == 'linux') {
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
} else {
    input = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`.split('\n');
}
let map : Map<string,number> = new Map();
let array : string[] = [];
let result = "";

let idx = 0;
for (let i = 1; i < input.length; i++) {
    let line = input[i];
    if (isNaN(+line)) {
        if (!map.has(line)) {
            map.set(line,++idx);
            array.push(line);
        } else {
            result += `${map.get(line)}\n`;
        }
    } else {
        result += `${array[+line -1]}\n`
    }
}
console.log(result);