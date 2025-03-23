let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw ! Play Again.";
  msg.style.backgroundColor = "rgb(4, 32, 56)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper,scissors
      userWin = compchoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock,paper
      userWin = compChoice === "paper" ? true : false;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
