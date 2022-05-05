const decrease_btn = document.getElementById('decrease_btn'); //this instantiates the btn class, which can then be used to pull data from
const reset_btn = document.getElementById('reset_btn'); //this instantiates the btn class, which can then be used to pull data from
const increase_btn = document.getElementById('increase_btn'); //this instantiates the btn class, which can then be used to pull data from
let num= document.getElementById('number');
let number_val = num.innerHTML;
increase_btn.addEventListener('click',() =>{ // anytime the object on the page with class= btn is clicked, the color changes
    //console.log(document.body)// targets the body
    // get a random number between 0 - 3
    number_val+=1;
    if(number_val>0){
        let text_col="green";
        num.style.color = text_col;
    }
    if(number_val<0){
        let text_col="red";
        num.style.color = text_col; 
    }
    if(number_val==0){
        let text_col="gray";
        num.style.color = text_col; 
    }
    num.textContent = number_val;
})

decrease_btn.addEventListener('click',() =>{ // anytime the object on the page with class= btn is clicked, the color changes
    //console.log(document.body)// targets the body
    // get a random number between 0 - 3
    number_val-=1;
    if(number_val>0){
        let text_col="green";
        num.style.color = text_col;
    }
    if(number_val<0){
        let text_col="red";
        num.style.color = text_col; 
    }
    if(number_val==0){
        let text_col="gray";
        num.style.color = text_col; 
    }
    num.textContent = number_val;
})

reset_btn.addEventListener('click',() =>{ // anytime the object on the page with class= btn is clicked, the color changes
    //console.log(document.body)// targets the body
    // get a random number between 0 - 3
    number_val=0;
    if(number_val>0){
        let text_col="green";
        num.style.color = text_col;
    }
    if(number_val<0){
        let text_col="red";
        num.style.color = text_col; 
    }
    if(number_val==0){
        let text_col="gray";
        num.style.color = text_col; 
    }
    num.textContent = number_val;
})

