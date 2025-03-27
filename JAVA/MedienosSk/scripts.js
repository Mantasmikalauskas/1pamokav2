const mygtukasSkaiciuoti = document.getElementById("skaiciuoti");

mygtukasSkaiciuoti.addEventListener("click",() => {
    const formData = new FormData (document.getElementById("forma"));
    const formValues = Object.fromEntries(formData.entries());

    const lentosTuris = 
    parseFloat(formValues.plotis) *
    parseFloat(formValues.ilgis) *
    parseFloat(formValues.gylis);
    const kubuSuma = lentosTuris * parseFloat(formValues.kiekis);

    const kubuKaina = kubuSuma * parseFloat(formValues["kubo-kaina"]);
    const galutineKaina = kubuKaina.toFixed(2);

    document.querySelector("span.kaina").innerText = kubuKaina;
    console.log(kubuKaina);
});