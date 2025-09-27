const body = document.querySelector("body");
const allBtns = document.querySelectorAll(".button");

allBtns.forEach((buttons) => {
  buttons.addEventListener("click", function (event) {
    if (event.target.id == "grey") {
      body.style.backgroundColor = "grey";
    } else if (event.target.id == "orange") {
      body.style.backgroundColor = "orange";
    } else if (event.target.id == "blue") {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "yellow";
    }
  });
});
