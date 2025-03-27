window.addEventListener("load", () => {
  let scoreBlock = document.querySelector(".main-game .score");
  let score = 0;
  let ownedFactories = [];

  document.querySelector(".main-game .click-zone").onclick = () => {
    score += 10;
    scoreBlock.innerText = score;
  };

  document.querySelectorAll(".factory").forEach((fc) => {
    let factory = {
      title: fc.querySelector(".title").innerText,
      costs: fc.querySelector(".price").innerText,
      isAdding: fc.querySelector(".adds").innerText,
      count: fc.querySelector(".adds").innerText.slice(1, -1),
      button: fc.querySelector("button"),
    };
    factory.button.onclick = () => {
      if (score >= factory.costs) {
        score -= factory.costs;
        factory.count++;
        scoreBlock.innerText = score;
        fc.querySelector(".count").innerText = `(${factory.count})`;
      }
    };
    ownedFactories.push(factory);
  });

  setInterval(() => {
    score += ownedFactories
      .map((x) => x.count * x.isAdding)
      .reduce((a, b) => a + b, 0);
    scoreBlock.innerText = score;
  }, 1000);
});
