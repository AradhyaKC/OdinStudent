var result=document.querySelector(".result>#operand");
var operation= document.querySelector(".result>#operation");
// operation.style.cssText+="background-color:red";
var btnArray = Array.from(document.querySelectorAll(".button"));

var decimalCount=0;
var argumentArray =[null,null];
var doSecond=false;
window.addEventListener('keydown',onkeyDown);
window.onload= ()=>{
    Clear();
    btnArray.forEach(element => {
        element.addEventListener('click',(e)=>{
            let buttonContent=e.target.textContent;
            
            if(isValid(buttonContent)!=false && buttonContent!="CE" ){
                if(argumentArray[+doSecond]==null){
                    argumentArray[+doSecond]=Number.parseInt(buttonContent);
                }else{  
                    argumentArray[+doSecond]=decimalCount==0? 
                    (argumentArray[+doSecond]*10)+Number.parseInt(buttonContent):
                    argumentArray[+doSecond] + (Math.pow(10,-decimalCount)
                    *Number.parseInt(buttonContent)) ;
                    if(decimalCount>0) decimalCount++;
                }
                result.textContent = argumentArray[+doSecond].toString();
            }else{
                if(buttonContent=="."){
                    if(decimalCount==0) {
                        decimalCount++;
                        if(argumentArray[+doSecond]==null)
                        argumentArray[+doSecond]=0;
                    }
                    return;  
                }
                
                if(argumentArray[0] == null) return; // not handling CE beacuase its already cleared;
                if(argumentArray[1]==null ) {
                    if(buttonContent=="CE"||buttonContent=="=") {
                        if(buttonContent=="CE") Clear(); return;
                    }
                    operation.textContent=buttonContent;
                    decimalCount=0;
                    doSecond=true;
                    return;
                }else if(argumentArray[0]!=null && argumentArray[1]!=null){
                    
                    EvalOperands();
                    result.textContent=argumentArray[0].toString();
                    argumentArray[1]=null;
                    switch(buttonContent){
                        case "=":
                            operation.textContent=""; 
                            let temp =argumentArray[0];
                            Clear();
                            result.textContent=temp.toString();
                            break;
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                            operation.textContent=buttonContent; break;
                        case "CE":Clear();break;
                    }

                }else{
                    console.error("unreferenced case initiated");
                }
            }

        });
    });
}


function EvalOperands(){
    console.assert(argumentArray[0]!=null && argumentArray[1]!=null);
    switch(operation.textContent){
        case "":
            console.error("EvalOperands called on null operation");
            break;
        case "+": 
            argumentArray[0] = argumentArray[0]+argumentArray[1];
            break;
        case "-": 
            argumentArray[0] = argumentArray[0]-argumentArray[1];
            break;
        case "*": 
            argumentArray[0] = argumentArray[0]*argumentArray[1];
            break;
        case "/": 
            if(argumentArray[1]==0){
                result.textContent="NaN";
                argumentArray[0]="NaN";
                return;
            }
            argumentArray[0] = argumentArray[0]/argumentArray[1];
            break; 
        default : console.assert("unreferencd Case initiated");
    }
}

function onkeyDown(e){
    if (e.key == 'Backspace'){
        if(argumentArray[+doSecond]==null ||argumentArray[+doSecond]=="NaN") return;
        if(decimalCount==0){
            argumentArray[+doSecond]= (argumentArray[+doSecond] - (argumentArray[+doSecond]%10))/10;
        }else{
            let temp = argumentArray[+doSecond].toString().slice(0,-1);
            argumentArray[+doSecond] = Number.parseFloat(temp);
            decimalCount--;
        }
        result.textContent=argumentArray[+doSecond];
    }
}
function Clear(){
    result.textContent="";
    argumentArray[0]=null;
    argumentArray[1]=null;
    operation.textContent="";
    doSecond=false;
    decimalCount=0;
}

function isValid(str){
    return !/[~`!#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?]/g.test(str);
}