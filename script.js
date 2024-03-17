let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-Game");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector(".msg");



let turnX = true;

const winPattern = [ 
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
    box.addEventListener("click", () =>{
        if (turnX){
            box.innerText = "X";
            turnX= false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


const resetGame = () =>{
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const enableBox = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBox = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}

showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    


}



const checkWinner = () => {

    for (let pattern of winPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val) {
                disableBox();
                console.log("Winner", pos1val);
                showWinner(pos1val);
                return; // Exit the function after finding a winner
            }
            
        }
    }
    
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);   