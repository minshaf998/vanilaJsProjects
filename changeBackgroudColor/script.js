//======================================first button
const body = document.querySelector("body");
const colors = ["red", "green", "blue", "yellow", "pink", "purple", "grey","white","purple"]; // initiating colors

body.style.backgroundColor =
    colors[parseInt(Math.floor(Math.random() * colors.length))]; //starting random background color

function changeBackground() {
    const colorIndex = parseInt(Math.floor(Math.random() * colors.length));
    body.style.backgroundColor = colors[colorIndex];
}

//========================================second button

const colvals = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

function random() {
    var str = "#";
    for (var i = 0; i < 4; i++) {
        str += colvals[Math.floor(Math.random() * colvals.length)];
    }
    body.style.backgroundColor = str;
}

//==============================================third button
function blink() {
    random();
    setTimeout(blink, 1000);
}