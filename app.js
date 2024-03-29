let gameSeq = [];
let userSeq = [];
let btns =["yellow","red","green","blue"];
let started = false;
let level = 0;

let h2 =document.querySelector('h2');

document.addEventListener("keypress",function(){
    if (started == false) {
        console.log("Game Started");
        started= true;
        
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML="Level "+level;

let randomIndex =Math.floor(Math.random()*btns.length);
let randomColor = btns[randomIndex];
let randombtn = document.querySelector("."+randomColor);
gameSeq.push(randomColor);
    gameFlash(randombtn);
}

function  checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else {
        h2.innerHTML =`Game Over! Your Score was ${level} Press any key to start.`;
        document.querySelector("body").style.backgroundColor="purple";
        setTimeout( function() {
            document.querySelector("Body").style.backgroundColor =" white";
        },250);
       

        reset();
    }
}

function btnPress(){
    let btn = this;
     userFlash(btn);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);

     checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);

}

function reset(){
    gameSeq = [];
    userSeq =[];
    started =false;
    level=0;
}