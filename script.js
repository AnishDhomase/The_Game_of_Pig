// Help button popup
let canvas = document.querySelector("#canvas");
let helpbtn = document.querySelector("#help div");
let helpPopUp = document.querySelector("#helpPopUp");
let closeBtn = document.querySelector("#helpPopUp img");

let popup = function(){
    helpPopUp.classList.remove("hidden");
    helpbtn.classList.add("hidden");
}
let popdown = function(){
    helpPopUp.classList.add("hidden");
    helpbtn.classList.remove("hidden");
}
helpbtn.addEventListener("click",popup);
closeBtn.addEventListener("click",popdown);

// Game functionality
    // Players dashboard
let ply1 = document.querySelector("#p1");
let ply2 = document.querySelector("#p2");
let Score1 = document.querySelector("#p1 .digit");
let Score2 = document.querySelector("#p2 .digit");
let Current1 = document.querySelector("#p1 .sum");
let Current2 = document.querySelector("#p2 .sum");
let scoreBox1 = document.querySelector("#p1 .score");
let scoreBox2 = document.querySelector("#p2 .score");
    // Game Buttons
let newGame = document.querySelector("#main #newgame");
let dice = document.querySelector("#main img");
let hold = document.querySelector("#main #hold");

let chance=1;
let rollDice = function(){
    let random = Math.trunc(Math.random()*6)+1;
    dice.src = `dice-${random}.png`;

    if(random==1){
        if(chance==1)
            Current1.textContent = 0;
        else
            Current2.textContent = 0;

        chance = (chance==1) ? 2 : 1;
        scoreBox1.classList.toggle("blink");
        scoreBox2.classList.toggle("blink");
    }
    else{
        let sc;
        if(chance==1){
            sc = Number(Current1.textContent);
            Current1.textContent = sc + random;
        }
        else{
            sc = Number(Current2.textContent);
            Current2.textContent = sc + random;
        }
    }
}
let addToFinal = function(){
    if(chance==1){
        s1 = Number(Score1.textContent);
        c1 = Number(Current1.textContent);
        Score1.textContent = s1 +c1;
        Current1.textContent = 0;
    }
    else{
        s2 = Number(Score2.textContent);
        c2 = Number(Current2.textContent);
        Score2.textContent = s2 +c2;
        Current2.textContent = 0;
    }
}
let checkWinner = function(){
    if(Number(Score1.textContent)>=100)
        return 1;
    else if(Number(Score2.textContent)>=100)
        return 2;
    return 0;
}
let holding = function(){
    addToFinal();
    let win = checkWinner();
    if(!win){
        chance = (chance==1) ? 2 : 1;
        scoreBox1.classList.toggle("blink");
        scoreBox2.classList.toggle("blink");
    }
    else{
        canvas.classList.add("bgwin");
        scoreBox1.classList.remove("blink");
        scoreBox2.classList.remove("blink");
    }
    if(win)         alert(`🎊🎊  PLAYER ${win} Won the game!  🎊🎊`);
}
let reset = function(){
    Current1.textContent = "00";
    Current2.textContent = "00";
    Score1.textContent = "00";
    Score2.textContent = "00";
    scoreBox1.classList.add("blink");
    scoreBox2.classList.remove("blink");
    dice.src = `dice-1.png`;
}
    

dice.addEventListener("click",rollDice);
hold.addEventListener("click",holding);
newGame.addEventListener("click",reset);
