setTimeout(function(){



const choicesImg = ["../img/rock.png","../img/paper.png","../img/scissors.png"];
const zoe = document.querySelector("#zoe-animation");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const lelasImage = document.getElementsByTagName("img")[0];
const pcImage = document.getElementsByTagName("img")[1];
const lelasScoreboard = document.querySelector("#lela-score");
const lelasCard = document.querySelector("#lela-scoreboard");
const pcScoreboard = document.querySelector("#pc-score");
const pcCard = document.querySelector("#pc-scoreboard");
const gameForm = document.querySelector("#game-form");
const clearStorage = document.querySelector("#clear-storage");
let lelasChoice;
const scoreString = "SCORE: ";
let lelasScore = 0;
let pcScore = 0;
lelasScore = localStorage.getItem("lela");
pcScore = localStorage.getItem("pc");
checkLocalStorage();
setScore();

rock.addEventListener('click', function(){
    lelasChoice = choicesImg[0];
    lelasImage.src = lelasChoice;
    pcChoice()
})
paper.addEventListener('click', function(){
    lelasChoice = choicesImg[1];
    lelasImage.src = lelasChoice;
    pcChoice()
})
scissors.addEventListener('click', function(){
    lelasChoice = choicesImg[2];
    lelasImage.src = lelasChoice;
    pcChoice()
})

clearStorage.addEventListener('click', function(){
    clearLocalSorage();
})

gameForm.addEventListener('mouseout', function(){
    gameForm.style.boxShadow = "17px 25px 124px -5px rgba(0,255,183,1)";
})

zoe.addEventListener('mousedown', function(){
    zoe.style.boxShadow = "0px 0px 210px 29px rgba(246,71,255,1)";
})

zoe.addEventListener('mouseup', function(){
    zoe.style.transition = "0.4s ease";
    zoe.style.boxShadow = "none";
})

function pcChoice(){
    pcSlide();
    let pcChoice = choicesImg[Math.floor(Math.random() *3)];
    gameForm.style.transition = "1s ease-in-out";
    checkWinner(pcChoice);
}

function pcSlide(){
    setTimeout(function(){
        pcImage.src = choicesImg[0];
    },500);
    setTimeout(function(){
        pcImage.src = choicesImg[1];
    },1000);
    setTimeout(function(){
        pcImage.src = choicesImg[2];
    },1500);
}

function checkWinner(pcChoice){
    setTimeout(function(){
        if(lelasChoice == choicesImg[0] && pcChoice == choicesImg[2]){
            lelasScore++;
            localStorage.setItem("lela", `${lelasScore}`);
            lelasCard.style.borderColor = "rgba(0,255,47,1)";
            pcCard.style.borderColor = "rgba(242,58,58,1)";
            gameForm.style.boxShadow = "0px 0px 300px 124px rgba(0,255,47,0.5)";
            pcImage.src = choicesImg[2];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[0] && pcChoice == choicesImg[1]){
            pcScore++;
            localStorage.setItem("pc", `${pcScore}`);
            pcCard.style.borderColor = "rgba(0,255,47,1)";
            lelasCard.style.borderColor = "rgba(242,58,58,1)";
            gameForm.style.boxShadow = "0px 0px 300px 124px rgba(242,58,58,0.5)"
            pcImage.src = choicesImg[1];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[0] && pcChoice == choicesImg[0]){
            gameForm.style.boxShadow = "0px 0px 300px 118px rgba(225,255,0,0.5)";
            lelasCard.style.borderColor = "#F8D210";
            pcCard.style.borderColor = "#F8D210";
            pcImage.src = choicesImg[0];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[1] && pcChoice == choicesImg[0]){
            lelasScore++;
            localStorage.setItem("lela", `${lelasScore}`);
            lelasCard.style.borderColor = "rgba(0,255,47,1)";
            pcCard.style.borderColor = "rgba(242,58,58,1)";
            gameForm.style.boxShadow = "0px 0px 300px 124px rgba(0,255,47,0.5)"
            pcImage.src = choicesImg[0];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[1] && pcChoice == choicesImg[2]){
            pcScore++;
            localStorage.setItem("pc", `${pcScore}`);
            pcCard.style.borderColor = "rgba(0,255,47,1)";
            lelasCard.style.borderColor = "rgba(242,58,58,1)";
            gameForm.style.boxShadow = "0px 0px 300px 124px rgba(242,58,58,0.5)"
            pcImage.src = choicesImg[2];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[1] && pcChoice == choicesImg[1]){
            gameForm.style.boxShadow = "0px 0px 300px 118px rgba(225,255,0,0.5)";
            lelasCard.style.borderColor = "#F8D210";
            pcCard.style.borderColor = "#F8D210";
            pcImage.src = choicesImg[1];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[2] && pcChoice == choicesImg[1]){
            lelasScore++;
            localStorage.setItem("lela", `${lelasScore}`);
            lelasCard.style.borderColor = "rgba(0,255,47,1)";
            pcCard.style.borderColor = "rgba(242,58,58,1)";
            gameForm.style.boxShadow = "0px 0px 300px 124px rgba(0,255,47,0.5)"
            pcImage.src = choicesImg[1];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[2] && pcChoice == choicesImg[0]){
            pcScore++;
            localStorage.setItem("pc", `${pcScore}`);
            pcCard.style.borderColor = "rgba(0,255,47,1)";
            lelasCard.style.borderColor = "rgba(242,58,58,1)";
            gameForm.style.boxShadow = "0px 0px 300px 124px rgba(242,58,58,0.5)"
            pcImage.src = choicesImg[0];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
        else if(lelasChoice == choicesImg[2] && pcChoice == choicesImg[2]){
            gameForm.style.boxShadow = "0px 0px 300px 118px rgba(225,255,0,0.5)";
            lelasCard.style.borderColor = "#F8D210";
            pcCard.style.borderColor = "#F8D210";
            pcImage.src = choicesImg[2];
            pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
            lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
        }
    },2000)
}

function checkLocalStorage(){
    if(localStorage.getItem("pc") == null) localStorage.setItem("pc", "0");
    if(localStorage.getItem("lela") == null) localStorage.setItem("lela", "0");
}

function clearLocalSorage(){
    localStorage.removeItem('lela');
    localStorage.removeItem('pc');
    lelasScore = 0;
    pcScore = 0;
    localStorage.setItem("lela", `${lelasScore}`);
    localStorage.setItem("pc", `${pcScore}`);
    pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
    lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
    gameForm.style.boxShadow = "17px 25px 124px -5px rgba(0,255,183,1)";
    lelasCard.style.borderColor = "#F8D210";
    pcCard.style.borderColor = "#F8D210";
}

function setScore(){
    pcScoreboard.textContent = `${scoreString}${localStorage.getItem("pc")}`;
    lelasScoreboard.textContent = `${scoreString}${localStorage.getItem("lela")}`;
}



}, 1)