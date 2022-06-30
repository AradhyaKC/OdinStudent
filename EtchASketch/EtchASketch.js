var mousedown=false;
function buildGrid(noOfDiv){
    var gridContainer =document.querySelector(".grid-container");

    gridContainer.innerHTML='';

    gridContainer.style.gridTemplateColumns = `repeat(${noOfDiv},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${noOfDiv},1fr)`;
    for(let i =0;i<noOfDiv*noOfDiv;i++){
        var newNode= document.createElement("div");
        newNode.classList.add("tempChild");
        newNode.addEventListener("mouseover",(e)=>{
            if(!mousedown) return;
            let r =Math.floor(Math.random()* 255);
            let g =Math.floor(Math.random()* 255);
            let v= Math.floor(Math.random()* 255);
            e.target.style.cssText+=`background-color:rgba(${r},${g},${v});`;
        });
        gridContainer.appendChild(newNode);
    }
    
}
function setMouseDown(value){
    mousedown=value;
    console.log("mouse down");
}

window.onload= ()=>{
    buildGrid(8);
}

var button = document.querySelector("button.change");
console.assert(button!= undefined | button!=null);
button.addEventListener('click',(e)=>{
    let noOfPixels =prompt("Enter no of pixels", 8);
    console.log("working");
    buildGrid(parseInt( noOfPixels));
});

