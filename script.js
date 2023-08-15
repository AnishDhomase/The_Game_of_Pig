let canvas = document.querySelector("#canvas");
let helpbtn = document.querySelector("#help div");
let helpPopUp = document.querySelector("#helpPopUp");
let closeBtn = document.querySelector("#helpPopUp img");

let popup = function(){
    helpPopUp.classList.remove("hidden");
}
let popdown = function(){
    helpPopUp.classList.add("hidden");
}
helpbtn.addEventListener("click",popup);
closeBtn.addEventListener("click",popdown);