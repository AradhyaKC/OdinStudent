import './App.css';
import React, { useEffect } from 'react';
import uniqid from "uniqid";
import GeneralInfo from './CVApp1Com';
import { useState } from 'react';


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


function App(props){
  var [count, setCount] = useState(6);
  const incrementCount= ()=>{
    setCount(count+1);
  }

  var copycat=2;
  useEffect(()=>{
    copycat=count;
    console.log(copycat);
  },[count]); 

  return (<div>
    <div> hello World , the count is {count}
    <div>copycat = {copycat!=undefined && <div>{copycat}</div>}</div> 
    </div>
    <button onClick={incrementCount}> incrementCount </button>
    <GeneralInfoFunc/>
  </div>
  );
}

function GeneralInfoFunc(props){
  const [state,setState]=useState({
    name:'',Age:0,onEditClicked:false
  });

  var nameElement,ageElement;
  useEffect(()=>{
    nameElement = document.querySelector('#name');
    ageElement=document.querySelector("#age");
    console.log("should be called everytime the page or name/age Elements re-render");
  },[state]);

  const onClick=(e)=>{
    e.preventDefault();
    if(nameElement.validity.valid && ageElement.validity.valid){
      setState({
        name:nameElement.value, age:ageElement.value, onEditClicked:false
      });
    }
  }
  const onEditClick=(e)=>{
    e.preventDefault();
    if(state.onEditClicked==false){
      console.assert(state.name!='' && state.age>0);
      nameElement.setAttribute('placeholder', state.name);
      ageElement.setAttribute('placeholder',state.age);
      nameElement.value='';
      ageElement.innerHTML='';
      setState({onEditClicked:true});
    }else{
      onClick(e);
    }
  } 

  return (
  <div>
    <form>
        <div>
          <div> <label htmlFor='name' >name</label></div>
          <div> <input  type='text' name='name' id='name' placeholder='name'/></div>
          <div> <label htmlFor='age'> Age</label></div>
          <div> <input type='number' name='age' id='age' placeholder='0'/></div>
          {state.onEditClicked==false && <button onClick={onClick} type='button'> Click</button>}
          { state.name !='' && <button onClick={onEditClick}> {state.onEditClicked?'Submit Edit':'Edit'}</button>}
        </div>
        <h1>
          <div>display :{state.name} and  age:{state.age}</div>
        </h1>
    </form>

  </div>
  
  );
}

export default App;
