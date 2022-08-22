import './App.css';
import React from 'react';
import uniqid from "uniqid";
import GeneralInfo from './CVApp1Com'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={toDos:[]}
  }
  
  async AddTodo(e){
    var toDotextEle =document.getElementById('toDoText');
    if(!toDotextEle.validity || this.state.toDos.indexOf(toDotextEle.value)!==-1){
      toDotextEle.setCustomValidity("hello , wrong input");
      return;
    } 
    await this.setState({toDos:[toDotextEle.value,...this.state.toDos]});
    console.log(this.state.toDos);
  }
  // render() {
  //   return (
  //     <div className='App'>
  //       <div className='form-container'>
  //         <form>
  //           <div><label htmlFor='ToDo'> Toda Todo </label></div>
  //           <div><input type='text' id='toDoText' name='ToDo' placeholder='Write your ToDo here ' required pattern='[a-z]+' /></div>
  //           <div><button type='button' onClick={this.AddTodo.bind(this)} > Add ToDo</button></div>
            
  //           <RenderList>
  //             {this.state.toDos}
  //           </RenderList>
  //         </form>
  //       </div>
  //     </div>
  //  );
  // }
  render(){
    return(
      <div className='App'>
        <GeneralInfo/>
      </div>
    );
  }

}

class RenderList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.props.children.map((element)=>{
          return (<div key={uniqid()}>{element}</div>);
        })}
      </div>
    );
  }
}
export default App;
