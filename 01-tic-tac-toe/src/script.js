console.log('Welcome to tic tac toc');

let audioturn = new Audio('../Assets/ting.mp3');
let music = new Audio('../Assets/music.mp3');
let gameover = new Audio('../Assets/gameover.mp3');


let turn = "X"
let isgameover = false;

// function to change the turn 

const ChangeTheTurn = () => {
    return turn === "X"? "O": "X";
} 

// function to check a win 

const CheckWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        // possibilities of winning by row position  
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // possibilities of winning by column position 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // possibilities of winning by digonal position
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if(
        boxtext[e[0]].innerText === boxtext[e[1]].innerText && 
        boxtext[e[2]].innerText === boxtext[e[1]].innerText && 
        boxtext[e[0]].innerText !== ""
    ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"; 
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '120px';
         }
    })

}

// Game logic 

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click' , (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = ChangeTheTurn();
            audioturn.play();
            CheckWin();
            if(!isgameover ){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

            }

        }
    })
})

// adding onclick listner 

reset.addEventListener("click" , () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
     if(!isgameover ){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
               
            }

})




