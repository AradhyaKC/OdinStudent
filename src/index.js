import './style.css'
import _ from 'lodash';
import myImage from "./cross.svg";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");
    const myIcon = new Image();

    myIcon.src = myImage;
    console.log("hello ");
    console.log("hello this ");
  
  
    element.appendChild(myIcon)
    return element;
}
  
  document.body.appendChild(component());