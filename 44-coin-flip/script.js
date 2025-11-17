const flipCoin = document.getElementById("flip");
const imgCont = document.getElementById("imgdiv");

flipCoin.addEventListener("click", () => {
  const random = Math.random() < 0.5 ? "heads" : "tails";

  imgCont.innerHTML = `<img src="44-coin-flip/heads.jpeg" alt="${random}">`;
});
