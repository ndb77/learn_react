const colors = ["green","red","rgba(133,122,200)","f15025"];

const btn = document.getElementById('btn'); //this instantiates the btn class, which can then be used to pull data from
const color = document.querySelector(".color");//query selector finds the first selector that matches input
btn.addEventListener('click',() =>{ // anytime the object on the page with class= btn is clicked, the color changes
    //console.log(document.body)// targets the body
    // get a random number between 0 - 3
    const randomNumber = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
