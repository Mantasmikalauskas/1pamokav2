function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log("Sugeneruoti Eurai");
let eurai = (getRandomInt(1000));
let doleriai = eurai / 0.93
console.log(eurai,'EUR');
console.log("Apskaiciuoti doleriai 1,08 kursu");
console.log(doleriai,'USD');
