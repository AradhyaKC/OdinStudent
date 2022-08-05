function Vook(){
    this.name = "No Name"
    this.author = "No Name"
    this.pages= 0;
    this.read=false;
}
Vook.prototype.Read = function(){
    this.read=true;
}

function Library(){
    this.books= [new Vook(), new Vook()];
    this.DisplayTable(document.getElementById("table"));
}

Library.prototype.AddVook = function(book){
    this.books.push(book);
    this.DisplayTable(document.getElementById("table"));
}

Library.prototype.DisplayTable = function(tableElement){
    tableElement.innerHTML='';
    tableElement.innerHTML="<tr><th> Name Of book </th><th> Author </th><th> No of pages</th><th> Read </th><th> Read button</th></tr>";
    this.books.forEach(element => {
        var newElement = document.createElement("tr");
        var tdElement= document.createElement("td");
        tdElement.innerHTML=element.name;
        newElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML=element.author;
        newElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        newElement.appendChild(tdElement);
        tdElement.innerHTML=element.pages.toString();
        tdElement = document.createElement("td");
        newElement.appendChild(tdElement);
        tdElement.innerHTML=element.read.toString();
        tdElement = document.createElement("td");
        var name = document.querySelector("#Name");
        var buttonTag = document.createElement("button");
        buttonTag.onclick = (e)=>{
            var temp=element.Read();
            this.DisplayTable(document.getElementById("table"));
        }
        buttonTag.textContent="Click To Read";
        tdElement.appendChild(buttonTag);
        newElement.appendChild(tdElement);

        tableElement.appendChild(newElement);
    });
}

window.onload=()=>{
    var newLibrary= new Library();
    var Addbutton = document.querySelector("button.Addbook");
    Addbutton.onclick= e=>{
        var modal=document.querySelector(".modal");
        modal.classList.add("active");
    };
    var AddVookbutton = document.querySelector("form button");
    AddVookbutton.onclick = e=>{
        var name = document.querySelector("#Name").value;
        var author= document.querySelector("#Author").value;
        var pages = document.querySelector("#Pages").value;
        var read = document.querySelector("#Read").checked;
        var modal=document.querySelector(".modal.active");
        var newVook = new Vook();
        newVook.name = name;
        newVook.pages=pages;
        newVook.author= author;
        newVook.read=read;
        newLibrary.AddVook(newVook);
        modal.classList.remove("active");
    }
};
