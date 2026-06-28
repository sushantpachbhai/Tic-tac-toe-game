let music = new Audio("../sounds/music.mp3");
let gameoversound = new Audio("../sounds/gameover.mp3");
let boxclicksound = new Audio("../sounds/ting.mp3");
let excitedgif = document.getElementById("winimg");
let turn = "X";
let isgameover = false;

// for changing turn
let changeturn = ()=>{
    return turn === "X"? "0":"X";
}

// to check who win
let checkwin = ()=>{
    let boxcontent = Array.from(document.getElementsByClassName("box-content"));
    console.log(boxcontent);
    let possiblewins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    possiblewins.forEach(values =>{
        if((boxcontent[values[0]].innerText === boxcontent[values[1]].innerText) && (boxcontent[values[1]].innerText === boxcontent[values[2]].innerText) && (boxcontent[values[0]].innerText !== "")){
            document.getElementsByClassName("set-turn")[0].innerText = ((boxcontent[values[0]].innerText)+" won");
            excitedgif.style.width = "200px";
            gameoversound.play();
            isgameover = true;
            // document.querySelector(".line").style.width = `${values[3]}vw`;
            // document.querySelector(".line").style.transform = `translate(${values[4]}vw,${values[5]}vh) rotate(${values[6]}deg)`;
        }
        
    })
   
}
let box = Array.from(document.getElementsByClassName("box"));
box.forEach(myfunction);
function myfunction(element){
    element.addEventListener("click",(e)=>{
        boxclicksound.play();
        let boxtext = element.querySelector(".box-content");
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeturn();
            if(!isgameover){
                document.getElementsByClassName("set-turn")[0].innerText = "Turn of "+turn;
                checkwin();
            }
        }
    })
    
}

document.getElementById("reset-btn").addEventListener("click",()=>{
    let boxtext = Array.from(document.querySelectorAll(".box-content"));
    boxtext.forEach(element =>{
        element.innerText = "";
        excitedgif.style.width = "0px";
        turn = "X"
        isgameover = false;
        document.getElementsByClassName("set-turn")[0].innerText = "Turn of "+turn;
    })
})
