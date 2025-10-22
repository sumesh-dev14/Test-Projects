const calc = document
  .querySelector("#calc-btn")
  .addEventListener("click", function () {
    const loanAmount = document.querySelector("#amount").value;
    const intrestRate = document.querySelector("#intrest").value;
    const monthToPay = document.querySelector("#month").value;
    if (loanAmount === "" || intrestRate === "" || monthToPay === "") {
      alert("enter a value");
      return;
    }

    const newloanAmount = parseFloat(loanAmount);
    const rate = parseFloat(intrestRate) / 100 / 12;
    const time = parseFloat(monthToPay);

    const emi =
      (newloanAmount * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    const totalPayment = emi * time;
    const totalInterest = totalPayment - newloanAmount;

    document.getElementById("result").innerHTML = `
    <p>Monthly EMI: ₹${emi.toFixed(2)}</p>
    <p>Total Payment: ₹${totalPayment.toFixed(2)}</p>
    <p>Total Interest: ₹${totalInterest.toFixed(2)}</p>
  `;
  });
