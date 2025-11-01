const input = document.getElementById('input');
const Totalcounter = document.getElementById('totalNumber');
const rem = document.getElementById('number'); 

const maxLength = 50; 

input.addEventListener('input', function() {
  let str = input.value;
  let count = 0;

  
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (/[a-zA-Z]/.test(ch)) {
      count++;
    }
  }

  
  Totalcounter.textContent = count;
  rem.textContent = maxLength - str.length;
});
