const billAmount = document.querySelector("#bill-amount");
const tipAmount = document.querySelector("#tip-percent");
const calcBtn = document.querySelector("#calc");
const totalShow = document.querySelector("#numbers");

function calcTotal() {
  const billVal = parseFloat(billAmount.value);
  const tipVal = parseFloat(tipAmount.value);

  if (isNaN(billVal) || isNaN(tipVal) || billVal <= 0 || tipVal < 0) {
    totalShow.innerText = "Enter valid numbers!";
    totalShow.style.color = "red";
    return;
  }

  const totalTips = billVal * (1 + tipVal / 100);
  totalShow.style.fontSize = "20px";
  totalShow.style.fontWeight = "bold";
  totalShow.style.color = "green";
  totalShow.innerText = totalTips.toFixed(2);
}

calcBtn.addEventListener("click", calcTotal);
