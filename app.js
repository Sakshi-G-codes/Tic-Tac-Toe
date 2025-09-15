let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let trueO = true; // x = flase , O = true;

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

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        if(trueO){
            box.innerText = "O";
            trueO = false;
        }else{
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;
    });

    checkWinPattern();
});

let checkWinPattern = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    }
}