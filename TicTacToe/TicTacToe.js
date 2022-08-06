
var gridEle = document.querySelector(".center"); 
var gameboard = newGameboard(gridEle);

function newGameboard(gridElement){

    function checkWinner(){
        for(let playerNo=1; playerNo<3;playerNo++){
            for(let i=0;i<this.board.length;i++){
                if(this.board[i][0] ==this.board[i][1] && this.board[i][2]==this.board[i][1] && this.board[i][0]==playerNo)
                return playerNo;
            }
            for(let i=0;i<this.board.length;i++){
                if(this.board[0][i] ==this.board[1][i] && this.board[2][i]==this.board[1][i] && this.board[0][i]==playerNo)
                return playerNo;
            }
            if(this.board[1][1] ==this.board[0][0] && this.board[1][1]==this.board[2][2] && this.board[1][1]==playerNo)
            return playerNo;
            if(this.board[0][2] == this.board[1][1] && this.board[2][0] == this.board[1][1] && this.board[1][1]==playerNo)
            return playerNo;
        }
        return 0;
    }

    var refreshboard = function(){
        this.gridElement.innerHtml='';
        this.board = [[0,0,0], [0,0,0] , [0,0,0]];
        for(let i=0;i<this.board.length; i++){
            for(let j = 0;j<this.board[i].length;j++){
                var buttonElemnet = document.createElement("button");
                buttonElemnet.style["grid-column"] = j+1;
                buttonElemnet.style["grid-row"] = i+1;
                buttonElemnet.id=`button-${j+1}${i+1}`;
                buttonElemnet.onclick = (e)=>{
                    MarkCell.call(this,i,j)
                    this.displayboard();
                    var winner =checkWinner.call(this);
                    if(winner!=0)
                        document.querySelector("#winner").textContent= `player ${winner} wins`;
                }
                buttonElemnet.appendChild(document.createElement("img"));
                this.gridElement.appendChild(buttonElemnet);
            }
        }

    }

    var displayboard= function(){
        for(let i = 0 ; i<this.board.length;i++){
            for(let j = 0; j< this.board[i].length;j++){
                var buttonImg = document.querySelector(`#button-${j+1}${i+1}>img`);
                if(this.board[i][j]==0){
                    buttonImg.src="";
                }else if(this.board[i][j]==1){
                    buttonImg.src="cross.svg";
                }else {
                    buttonImg.src="circle.svg";
                }
            }
        }
    }
    const MarkCell= function(i,j){
        
        if(this.board[i][j]!=0) return;
        if(this.player1){
            this.board[i][j]=1;
        }else{
            this.board[i][j]=2;
        }
        this.player1=!this.player1;
        console.log(`${i}-${j}-${this.player1}`)
    }

    var gameboardObj = {};
    gameboardObj.gridElement = gridElement;
    gameboardObj.board=[[0,0,0],[0,0,0],[0,0,0]];
    gameboardObj.player1=true;
    var Gameboard = Object.assign(gameboardObj, {refreshboard,displayboard});
    Gameboard.refreshboard();
    Gameboard.displayboard();
    return Gameboard;
};
