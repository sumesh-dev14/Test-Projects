const body = document.querySelector('#body');
const label = document.querySelector('#lable')
const input = document.querySelector('#input');

input.addEventListener("change", () => {
  if (input.checked) {
    body.style.backgroundColor = "black";
    label.style.backgroundColor = "#fff";
  } else {
    body.style.backgroundColor = "white";
    label.style.backgroundColor = "#d3d3d3";
  }
});