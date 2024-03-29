import './App.css';
import React, { useContext, useEffect } from 'react';
import uniqid from "uniqid";
import GeneralInfo from './CVApp1Com';
import { useState } from 'react';
import { ShoppingListContext } from './ShoppingItemsContext';
import { Link } from 'react-router-dom';


// class App extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={toDos:[]}
//   }
  
//   async AddTodo(e){
//     var toDotextEle =document.getElementById('toDoText');
//     if(!toDotextEle.validity || this.state.toDos.indexOf(toDotextEle.value)!==-1){
//       toDotextEle.setCustomValidity("hello , wrong input");
//       return;
//     } 
//     await this.setState({toDos:[toDotextEle.value,...this.state.toDos]});
//     console.log(this.state.toDos);
//   }
//   // render() {
//   //   return (
//   //     <div className='App'>
//   //       <div className='form-container'>
//   //         <form>
//   //           <div><label htmlFor='ToDo'> Toda Todo </label></div>
//   //           <div><input type='text' id='toDoText' name='ToDo' placeholder='Write your ToDo here ' required pattern='[a-z]+' /></div>
//   //           <div><button type='button' onClick={this.AddTodo.bind(this)} > Add ToDo</button></div>
            
//   //           <RenderList>
//   //             {this.state.toDos}
//   //           </RenderList>
//   //         </form>
//   //       </div>
//   //     </div>
//   //  );
//   // }
//   render(){
//     return(
//       <div className='App'>
//         <GeneralInfo/>
//       </div>
//     );
//   }

// }

// class RenderList extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <div>
//         {this.props.children.map((element)=>{
//           return (<div key={uniqid()}>{element}</div>);
//         })}
//       </div>
//     );
//   }
// }


// function App(props){
//   var [count, setCount] = useState(6);
//   const incrementCount= ()=>{
//     setCount(count+1);
//   }

//   var copycat=2;
//   useEffect(()=>{
//     copycat=count;
//     console.log(copycat);
//   },[count]); 

//   return (<div>
//     <div> hello World , the count is {count}
//     <div>copycat = {copycat!=undefined && <div>{copycat}</div>}</div> 
//     </div>
//     <button onClick={incrementCount}> incrementCount </button>
//     <GeneralInfoFunc/>
//   </div>
//   );
// }

// function GeneralInfoFunc(props){
//   const [state,setState]=useState({
//     name:'',Age:0,onEditClicked:false
//   });

//   var nameElement,ageElement;
//   useEffect(()=>{
//     nameElement = document.querySelector('#name');
//     ageElement=document.querySelector("#age");
//     console.log("should be called everytime the page or name/age Elements re-render");
//   },[state]);

//   const onClick=(e)=>{
//     e.preventDefault();
//     if(nameElement.validity.valid && ageElement.validity.valid){
//       setState({
//         name:nameElement.value, age:ageElement.value, onEditClicked:false
//       });
//     }
//   }
//   const onEditClick=(e)=>{
//     e.preventDefault();
//     if(state.onEditClicked==false){
//       console.assert(state.name!='' && state.age>0);
//       nameElement.setAttribute('placeholder', state.name);
//       ageElement.setAttribute('placeholder',state.age);
//       nameElement.value='';
//       ageElement.innerHTML='';
//       setState({onEditClicked:true});
//     }else{
//       onClick(e);
//     }
//   } 

//   return (
//   <div>
//     <form>
//         <div>
//           <div> <label htmlFor='name' >name</label></div>
//           <div> <input  type='text' name='name' id='name' placeholder='name'/></div>
//           <div> <label htmlFor='age'> Age</label></div>
//           <div> <input type='number' name='age' id='age' placeholder='0'/></div>
//           {state.onEditClicked==false && <button onClick={onClick} type='button'> Click</button>}
//           { state.name !='' && <button onClick={onEditClick}> {state.onEditClicked?'Submit Edit':'Edit'}</button>}
//         </div>
//         <h1>
//           <div>display :{state.name} and  age:{state.age}</div>
//         </h1>
//     </form>

//   </div>
  
//   );
// }

function App(props){
  const ShoppingListApi = useContext(ShoppingListContext);
  const [state,setState] = useState(()=>{
    var ClickArray=[];
    for(let i=0;i<20;i++){ ClickArray.push(false);}
    console.log("should be called only once");
    return {ClickArray:ClickArray};
  });

  const onDivClick= async (key)=>{
    setState((prevState=>{ 
      prevState.ClickArray[key]=true;
      return {...prevState};
    }));
    ShoppingListApi.AddToCart(key);
  }
  return (
    <div className='grid-container App'>
      {console.log('rendering ' +state.ClickArray[9].toString()) }
      <Link to='/Profile'> Clcik here to go to Profile</Link>
      {state.ClickArray.map((element,index)=> <div onClick={()=>{onDivClick(index);}} key={index}
       className={state.ClickArray[index]?"grid-element clicked":"grid-element"}> Hello World {index+1} </div>)}
    </div>
  );
}
export default App;
