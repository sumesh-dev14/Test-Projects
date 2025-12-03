document.addEventListener("DOMContentLoaded", () => {
  const expenseFrom = document.getElementById("expense-form");
  const expenseNname = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAamountDisplay = document.getElementById("total-amount");
  // const addExpenseBtn = document.getElementsByTagName('button')
  // const expenseTotal = document.getElementById('total');

  // bring back from storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateExpenses();

  renderExpenses();
  expenseFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    // only at the form subbmission we will take the value or not
    const name = expenseNname.value.trim(); // getting the value
    const amount = parseFloat(expenseAmount.value); // getting the value
    if (name !== "" && !isNaN(amount) && amount > 0) {
      // cheking if the name i not empty and amount is not 0
      // creating a object to push into the array
      const newExpenses = {
        id: Date.now(),
        name,
        amount,
      };
      // pushing to the array
      expenses.push(newExpenses);
      // saving the value in local storage
      saveExpensesToLocal();
      // displaying the items in display
      renderExpenses();
      // update the total
      updateTotal();

      //clear the input
      expenseNname.value = "";
      expenseAmount.value = "";
    }
  });

  function calculateExpenses() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function saveExpensesToLocal() {
    // storing it in local storage using local storage
    // and json.stringify used to conver it to string

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expnese) => {
      let newElement = document.createElement("li");
      newElement.innerHTML = `
        ${expnese.name} - $ ${expnese.amount}
        <button data-id="${expnese.id}"> Delete </button>`;
      expenseList.appendChild(newElement);
    });
  }

  function updateTotal() {
    totalAmount = calculateExpenses();
    totalAamountDisplay.textContent = totalAmount.toFixed(2);
  }

  // event delegation that if a user only click on delete btn it will work
  expenseList.addEventListener("click", () => {
    if (e.target.tagName === "BUTTON") {
      // getting the btn id and deleting it
      let expenseId = parseInt(e.target.getAttribute("data-id"));
      // looping the array to filter out the element which should be removed
      expenses = expenses.filter((expense) => expense.id !== expenseId); // this will give the elements which are not id
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
