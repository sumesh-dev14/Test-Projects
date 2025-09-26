
// const calcWeight = document.querySelector('#weight'); // wrong to put in event listner 
// what is difference b/t selecting here and inside event listner ? 
// after submit then it will take the values if we mwntion inside the event listner  
// const calcBtn = document.querySelector('button');
// const result = document.querySelector('results');

const froms = document.querySelector('form');


froms.addEventListener("submit" , function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value) // .value is used to get the values from  text froms or inputs 
    const weight = parseInt(document.querySelector('#weight').value) 
    const results = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter the valid  height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter the valid  weight"
    }else {
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);

        if (bmi < 18.6) {
            results.innerHTML = ` <span>${bmi}</span> <br> Your are Under Weight`; 
        }else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = ` <span>${bmi}</span>  <br>  Your are in Normal Weight`;
        }else{
            results.innerHTML = `<span>${bmi}</span>  <br>  You are Overweight`;
        }

    }


}); 