const press = document.querySelector(".square");
const y = document.querySelector(".yelo");
const btngren = document.querySelector(".gren");
const re = document.querySelector(".reset");
const b = document.querySelector(".blu");
const r = document.querySelector(".red");

y.addEventListener('click' , ()=>{
    press.style.backgroundColor = 'Yellow'
})
btngren.addEventListener('click' , ()=>{
    press.style.backgroundColor = 'Green'
})
re.addEventListener('click' , ()=>{
    press.style.backgroundColor = '#dee2e6'
})
b.addEventListener('click' , ()=>{
    press.style.backgroundColor = 'blue'
})
r.addEventListener('click' , ()=>{
    press.style.backgroundColor = 'red'
})