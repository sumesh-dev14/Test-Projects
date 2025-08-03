let display = document.querySelector('.display-input');
let expression = '';

function press(value) {
  if (value === 'DEL') {
    expression = expression.slice(0, -1);
  } else if (value === 'x') {
    expression += '*'; 
  } else {
    expression += value;
  }
  display.value = expression;
}
function reset() {
  expression = '';
  display.value = '';
}

function calc() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString(); 
  } catch (e) {
    display.value = 'Error';
    expression = '';
  }
}
