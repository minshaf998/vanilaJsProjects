const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let yourScore = 0;
let computerScore = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let yourSelection = e.target.innerText;
    const objects = ["Rock", "Paper", "Scisser"];
    let computerSelection = objects[Math.floor(Math.random() * objects.length)];
    let result = checkWinner(yourSelection, computerSelection);

    if (result === "you") {
        result += " wins!";
        yourScore++;
    } else if (result === "computer") {
        result += " Wins!";
        computerScore++;
    } else if (result === "Drow") result += ". It's a tie!";

    message.innerHTML =
        "You = " + yourSelection + " || Computer = " + computerSelection;

    document.getElementById("winner").innerHTML = result;

    score.innerHTML = "You = " + yourScore + " || Computer = " + computerScore;
}

function checkWinner(you, computer) {
    if (you == computer) return "Drow";
    else if (you == "Rock") {
        if (computer == "Paper") return "computer";
        else return "you";
    } else if (you == "Paper") {
        if (computer == "Rock") return "you";
        else return "computer";
    } else if (you == "Scisser") {
        if (computer == "Rock") return "computer";
        else return "you";
    }
}