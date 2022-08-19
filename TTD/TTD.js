function CeaserCipher(shiftArg, message){
    var returnedCipher= '';
    for(let letter of message){
        let asciiCode = letter.charCodeAt(0);
        let shift=shiftArg%26;
        if(asciiCode-shift<97){
            shift = shift - (asciiCode -97); // remaining shift 
            asciiCode= 123 -shift;
        }else if(asciiCode-shift>122){
            shift = (asciiCode-shift)-122;
            asciiCode=96+shift;
        }else{
            asciiCode-=shift;
        }
        returnedCipher+=String.fromCharCode(asciiCode);
    }; 
    return returnedCipher;
}

CeaserCipher(29,'abc');

function newGameboard(){
    var Gameboard = function(){}
    var board= []; // [column,row]
    var ships=[];
    for(let i = 0;i<10;i++){
        let rowElement = []; 
        for(let j =0;j<10;j++){
            rowElement.push(-1);
        }
        board.push(rowElement);
    }
    var randomRegistry = [];
    

    Gameboard.getBoard=function(){    return this.board;   }
    Gameboard.getShips=function(){    return this.ships;   }

    return Gameboard;
}

module.exports = {CeaserCipher,newGameboard};

