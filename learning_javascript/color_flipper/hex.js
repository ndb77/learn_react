const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];

const btn = document.getElementById('btn'); //this instantiates the btn class, which can then be used to pull data from
const color = document.querySelector(".color");//query selector finds the first selector that matches input
btn.addEventListener('click',() =>{ // anytime the object on the page with class= btn is clicked, the color changes
    //console.log(document.body)// targets the body
    // get a random number between 0 - 3
    let hex_color = "#";
    for (let i = 0;i<6;i++){
        hex_color+=hex[Math.floor(Math.random()*hex.length)];
    }
    
    document.body.style.backgroundColor = hex_color;
    color.textContent = hex_color;
})
