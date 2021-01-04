const button_green = document.getElementById("green");
const body = document.querySelector("body");
const colors = ["red", "green", "blue", "yellow", "pink", "purple", "grey"];

const button_red = document.getElementById("blue");

body.style.backgroundColor = "#12AB";
button_green.addEventListener("click", changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

button_red.addEventListener("click",random);

const colvals = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


function random(){
    var str = '#';
    for(var i=0;i<4;i++){
        str+= colvals[Math.floor(Math.random()*colvals.length)];
    }
    body.style.backgroundColor = str;
}