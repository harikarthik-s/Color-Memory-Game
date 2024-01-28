let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns = ["c1", "c2", "c3", "c4"];
let h2 = document.querySelector("h3");


function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIndex = Math.floor(Math.random() * 3);
  let randColor = btns[randIndex];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(randBtn);
}

document.addEventListener("keypress", function() {
    if(started == false){
        started = true;
        levelUp();
    }
});

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

function reset() {
    started == false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function checkAns(index) {
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            document.querySelector("body").style.backgroundColor = "#57f557";
            setTimeout(function () {
              document.querySelector("body").style.backgroundColor = "white";
            }, 200);
            setTimeout(levelUp, 1500);
        }
    } else {
        h2.innerHTML = `Game Over! Your score is ${level}.<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress); 
}