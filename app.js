const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGamebtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".btn");
const msg = document.querySelector("#msg");

let trueO = true; // x = false , O = true;
var count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const resetGame = () => {
    trueO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        if(trueO){
            box.innerText = "O";
            trueO = false;
        }else{
            box.innerText = "X";
            trueO = true;
        }
        count++;
        box.disabled = true;

        let isWinner = checkWinPattern();

        if(count === 9 && !isWinner){
            showDraw();
        }
    });
});

const showDraw = () => {
    msg.innerText = "The game is a draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinPattern = () => {
    for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
            
        }
    }
};


newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);