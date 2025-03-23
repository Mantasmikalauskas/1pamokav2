

console.log("\n\n+--------+--------+ \n| Vardas | Amzius | \n+--------+--------+\n| Tomas  | 24-----|\n*** \n* * \n***");

console.log(`+--------+--------+
| Vardas | Amzius |
+--------+--------+
| Tomas  | 24     |`)

const vardas = "Mantas";
const pavarde = "Mikalauskas";

console.log(`
  Vardas: ${vardas} 
  Pavarde: ${vardas}`);



const grupe = "izfim6";
const vidurkis = "8";
const z = "zodis";
  console.log(`
   mano vardas yra: ${vardas} 
   akademine grupe: ${grupe}
   `)
   console.log("{z}");

   const amzius = "2";

   const zv = "*"

   console.log(`
    ${zv} ${zv} ${zv} ${zv} ${zv}
    ${zv}       ${zv}
    ${zv}       ${zv}
    ${zv} ${zv} ${zv} ${zv} ${zv}`);

let x = 5;
let a = 9;
let b = 4;
let c = 4;
console.log(x**3);
 

let pirmas = 8;
let antras = 12;
let trecias = 15;

if (pirmas == antras)
    console.log ("1. taip");
else (pirmas == antras)
    console.log ("1. ne");

if (a == b) {
    console.log("a yra lygu b")
} else{
    console.log("a nera lygu b")
}

//3punktas
if (b % 2 !== 0) {
    console.log("lyginis");
} else {
    console.log("nelyginis");
}




    console.log(a > b);
    console.log(a == 0);
    console.log(b == c);
    console.log(b <= 0);

    const figura = document.querySelector("#figura");

    const figurosPlotis = figura.clientWidth;
    const figurosAukstis = figura.clientHeight;

    if(figurosAukstis === figurosPlotis) {
        if(figurosPlotis >= kvadratoRiba){
            figura.style.backggroundColor = "red";
        }else{
            figura.style.backggroundColor = "blue";
        }
    } else {
        console.log("tai nera kadratas")
    }

    