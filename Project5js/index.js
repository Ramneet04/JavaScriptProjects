const gameInfo=document.querySelector(".Game-info");
const boxes=document.querySelectorAll(".box");
const btn=document.querySelector(".btn");

let currPlayer;
let gameGrid;
const winningPos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//Lets Create a function to initilize the game

function initGame(){
    currPlayer="O";
    //initilise nhi kara tha sahi se console me check kr liya kr okkk errors
    gameGrid=["","","","","","","","",""];
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText="";
        boxes[i].style.pointerEvents="all";
        boxes[i].classList.remove("win");
    }
    gameInfo.innerText=`Current Player -${currPlayer}`;
    btn.classList.remove("active");
}
initGame();

for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",()=>{
        handleClick(i);
        console.log(i);
    })
}
function swap(i){
    if(currPlayer=="X"){
        currPlayer="O";
    }
    else{
        currPlayer="X";
    }
    gameInfo.innerText=`Current Player -${currPlayer}`;
}
function checkWin(){
    let ans="";
    for(let i=0;i<winningPos.length;i++){
        //three boxes should be non empty and exactly similar..
        if((gameGrid[winningPos[i][0]]!=="" && gameGrid[winningPos[i][1]]!=="" && gameGrid[winningPos[i][2]]!=="")&&
        gameGrid[winningPos[i][0]]===gameGrid[winningPos[i][1]]&& gameGrid[winningPos[i][1]] === gameGrid[winningPos[i][2]]){
            if(gameGrid[winningPos[i][0]]=="X"){
                ans="X";
            }
            else{
                ans="O";
            }
            boxes[winningPos[i][0]].classList.add("win");
            boxes[winningPos[i][1]].classList.add("win");
            boxes[winningPos[i][2]].classList.add("win");
            
            for(let i=0;i<boxes.length;i++){
                boxes[i].style.pointerEvents="none";
            }
               
        }
    };
    if(ans!==""){
        gameInfo.innerText=`Winner Player -${ans}`;
        btn.classList.add("active");
    }

    for(let i=0;i<gameGrid.length;i++){
        if(gameGrid[i]===""){
            return;
        }
    }
    btn.classList.add("active");
    gameInfo.innerText=`Game Tied!`;
}
function handleClick(i){
    //ye if condition se unclickable wala bhi manage ho gya 
    if(gameGrid[i]==""){
        boxes[i].innerText=currPlayer;
        gameGrid[i]=currPlayer;
        boxes[i].style.pointerEvents="none";
        swap();
        checkWin();
    }
}

btn.addEventListener("click",initGame);