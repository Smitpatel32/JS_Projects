const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
let user;
let computer;

const possibleChoice = document.querySelectorAll("button");

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) =>{
    user = e.target.textContent;
    userChoice.innerHTML = user;
    generateComputer();
    res();
}));

function generateComputer(){
    const r = Math.floor(Math.random()*3) + 1 ;
    console.log(r);

    if(r===1){
        computer = "SCISSORS"
    }
    else if(r === 2)
    {
        computer = "PAPER"
    }
    else{
        computer = "ROCK"
    }

    computerChoice.innerHTML= computer;
}

function res(){
    if(computer === user)
    {
        result.innerHTML = "Draw";
    }
    else{

        if(computer === "ROCK" && user === "PAPER")
        {
            result.innerHTML = "Player Won";
        }
        else if(computer === "PAPER" && user === "SCISSORS")
        {
            result.innerHTML = "Player Won";
        }
        else if(computer === "SCISSORS" && user === "ROCK")
        {
            result.innerHTML = "Player Won";
        }
        else{
            result.innerHTML = "Computer Won";
        }
    }
}