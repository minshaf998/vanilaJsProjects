const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const winnerScores = [0, 0];

//start the game
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let YouSelection = e.target.innerText;
    let computerSelection = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }

    let result = checkWinner(YouSelection, computerSelection);

    if (result === "You") {
        result += " wins!";
        winnerScores[0]++;
    }

    if (result === "Computer") {
        result += " wins!";
        winnerScores[1]++;
    }

    if (result === "Draw") {
        result += ". It's a tie!";
    }

    score.innerHTML =
        "You: [ " + winnerScores[0] + " ] Computer: [ " + winnerScores[1] + " ]";

    messenger(
        "You: <strong>" +
        YouSelection +
        "</strong> Computer: <strong>" +
        computerSelection +
        "</strong><br>" +
        result
    );
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(You, computer) {
    if (You === computer) {
        return "Draw";
    }

    if (You === "Rock") {
        if (computer === "Paper") {
            return "Computer";
        } else {
            return "You";
        }
    }

    if (You === "Paper") {
        if (computer === "Scissors") {
            return "Computer";
        } else {
            return "You";
        }
    }

    if (You === "Scissors") {
        if (computer === "Rock") {
            return "Computer";
        } else {
            return "You";
        }
    }
}