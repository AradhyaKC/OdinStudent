
var currentPlayerChoice="";
var CountTableList = document.querySelectorAll("h3>span");
btnList= document.querySelectorAll(".child.flex-container>button");
var showPlayerChoice= document.querySelector("#playerChoice");
var showComputerChoice=document.querySelector("#computerChoice");

btnList.forEach(element => {
    element.addEventListener('click',(e)=>{
        currentPlayerChoice = element.getAttribute("data-key");
        showPlayerChoice.textContent=currentPlayerChoice;
        PlayRound(currentPlayerChoice);
    });
});

function Game(){
    var playerChoice=null;
    var computerChoice=null;
    for(let i =0;i<1;i++){
        playerChoice=PlayerPlay();
        computerChoice=ComputerPlay();
        showComputerChoice.textContent=computerChoice;
        let winNum = GetWinner(playerChoice,computerChoice);
    }
}
function PlayRound(choice){
    console.assert(typeof(choice)=="string" || (choice !="rock" && choice!="paper" && choice!="scissors"));
    let computerChoice=ComputerPlay();
    showComputerChoice.textContent=computerChoice;
    var winner= GetWinner(choice,computerChoice);
    if(winner==1){
        CountTableList[0].textContent= parseFloat(CountTableList[0].textContent)+1;
    }else if(winner=2){
        CountTableList[1].textContent= parseFloat(CountTableList[1].textContent)+1;
    }else{
        CountTableList[2].textContent= parseFloat(CountTableList[2].textContent)+1;
    }
}

function GetWinner(playerChoice,computerChoice){
    //playerchoice :string ;
    console.assert(typeof(playerChoice)=="string" && typeof(computerChoice)=="string");
    var playerChoiceNum = ConvertToInt(playerChoice);
    var computerChoiceNum =ConvertToInt(computerChoice);
    console.log(`the computer played ${computerChoice}`);
    rockPaperScissor= [1,2,3];
    revisedRockPaperScissor=[1,2,3];
    if(playerChoiceNum==3){
        let temp = revisedRockPaperScissor.shift();
        revisedRockPaperScissor.push(temp);
    }else if(playerChoiceNum==1){
        let temp = revisedRockPaperScissor.pop();
        revisedRockPaperScissor.unshift(temp);
    }
    
    if(revisedRockPaperScissor.indexOf(playerChoiceNum) > revisedRockPaperScissor.indexOf(computerChoiceNum)){
        console.log("You win ");
        return 1;// playerWins;
    }else if(revisedRockPaperScissor.indexOf(playerChoiceNum) < revisedRockPaperScissor.indexOf(computerChoiceNum)){
        console.log("You lose");
        return 2; // player loses;
    }else{
        console.log("Draw");
        return 3;
    }
    return 0;

}

function ConvertToInt(choice){
    console.assert(typeof(choice)=="string");
    switch(choice){
        case "rock" : return 1; break;
        case"paper" : return 2; break;
        case "scissors": return 3; break;
        default: return 1; break;
    }
}

function ComputerPlay(){
    let rndNuvmer =Math.random();
    console.assert(typeof(rndNuvmer)=="number");
    if(rndNuvmer <=0.33) return "rock";
    else if( rndNuvmer<=0.66) return "paper";
    else  return "scissors";  
}

function PlayerPlay(){
    var choice = null;
    while(choice ==null || typeof(choice)!="string" || (choice !="rock" && choice!="paper" && choice!="scissors")){
        choice =prompt("Enter your valid choice(can e rock ,paper or scissors ) ", "rock");
    }
    return choice;
}