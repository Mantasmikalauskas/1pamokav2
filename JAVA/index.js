//pirmas div
document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos antrastes tekstas';
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo pargrafo tekstas';

//antras div
console.log('ANTRAS DIV');

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log('paimtas si inner HTML tekstas:', tekstasIsParagrafo)

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log('paimtas si innerText tekstas:', tekstasIsParagrafo2)

console.log();


//trecias div
console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

console.log();

//septintas div
function pakeisti() {
    document.getElementById("septinto-tekstas").innerHTML = "naujas tekstas";
}

//astuntas div
function pakeisti2(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}

//devintas div
var pirmas = 8;
var antras = 9;

var suma = pirmas + antras;
var skirtumas = pirmas - antras;
var sandauga = pirmas * antras;
var dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML = pirmas + "+" + antras + "=" + suma;
document.getElementById("skirtumas").innerHTML = pirmas + "-" + antras + "=" + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas + "*" + antras + "=" + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas + "/" + antras + "=" + dalmuo;

//tryliktas div
let divKeitimui = document.getElementById('div-keitimui');

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function() {
    divKeitimui.style.width = this.value + 'px';
}
aukscioSlider.oninput = function() {
    divKeitimui.style.height = this.value + 'px';
}

let spalvosPasirinkimas = document.getElementById("spalvos-pasirinkimas");
spalvosPasirinkimas.oninput = function() {
    divKeitimui.style.backgroundColor = this.value;
}