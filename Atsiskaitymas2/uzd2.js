function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let doleriai = (getRandomInt(1000));
let eurai = doleriai * 0.93
console.log("Sugeneruoti Doleriai");
console.log(doleriai,'USD');
console.log("Apskaiciuoti eurai 1USD - 0.93EUR kursu");
console.log(eurai,'EUR');