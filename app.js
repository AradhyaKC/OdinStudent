
var parentDiv = document.querySelector("div.flex_container");
console.assert(parentDiv!=null || parentDiv!=undefined);
var newHtmlNode= document.createElement("div");
newHtmlNode.classList.add("background");
newHtmlNode.innerHTML=" fourth div";
newHtmlNode.style.cssText += "background: red; height :400px; ";
var button = document.createElement("button");
button.addEventListener('click',(e)=>{
    let eventTarget= e.target;
    eventTarget.style.cssText+= "background:blue;";
});
var nodeList = document.querySelectorAll("#newest>div");
nodeList.forEach(element => {
    element.addEventListener('mouseover', (e)=>{
        e.target.style.cssText+="background:green;";
    })
});
button.appendChild(newHtmlNode);
parentDiv.appendChild(button);
console.log("running");