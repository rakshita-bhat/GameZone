let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgcontain = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let game=document.querySelector(".container");

let turnO = true;
let count =0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes(); 
    msgcontain.classList.add("hide");
    
}

const newGame=()=>{
  turnO=true;
  count=0;
  enableBoxes(); 
  msgcontain.classList.add("hide");
  game.classList.remove("hide");
  resetbtn.classList.remove("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

     let isWinner=checkWinner();

     if (count==9 && !isWinner){
      gameDraw();
     }
  });
});

const gameDraw=()=>{
  msg.innerText=`Game was a Draw.`;
  msgcontain.classList.remove("hide");
  disableBoxes();
  game.classList.add("hide");
  resetbtn.classList.add("hide");
}

const enableBoxes=()=>{
  for (let box of boxes){
   box.disabled=false;
   box.innerText="";
  }
}

const disableBoxes=()=>{
 for (let box of boxes){
  box.disabled=true;
 }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations!! Winner is ${winner}`;
    msgcontain.classList.remove("hide");
    disableBoxes();
    game.classList.add("hide");
    resetbtn.classList.add("hide");

};

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 == posval2 && posval2 == posval3) {
        console.log("winner", posval1);
        showWinner(posval1);
        return true;
      }
    }
  }
};

 
newbtn.addEventListener("click",newGame);
resetbtn.addEventListener("click",resetGame);