import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setTimeout(function anon(){
// tick();
// setTimeout(anon,1000);
// },1000);

// function SayHello({type,...rest}){
//   var elements = [{Element:<h1>Hello , Im first</h1>}, 
//   {Element:<h1>Hello , Im second</h1>}];
//   var SpecificArrayElement ;
  
//   //console.assert(typeof props.type=='number');
//   if(type=='0'){
//     SpecificArrayElement =elements[0].Element;
//   }else{
//     SpecificArrayElement=elements[1].Element;
//   }
//   return SpecificArrayElement;
// }
// root.render(<div>
//   <div>Check to see if its working </div>
//   <SayHello type="1"/>
// </div>);



// root.render(
//   <h1> Hello World</h1>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

root.render(
  <div>
    <App/>
  </div>
)
reportWebVitals();
