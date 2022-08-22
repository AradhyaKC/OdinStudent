import React from "react";
import uniqid from "uniqid";

class ReflectiveCom extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.myRef=null;
    }

    getType(variable){
        if(typeof variable=='string') return 'text' 
        else if(typeof variable=='number') return 'number';   
    }

    async setState(state){
        await super.setState(state);
        console.log("my set state called");
        this.CreateForm(state,this.myRef);
    }

    CreateForm(model, name, urRef){
        var htmlEles=[];
        for(let variable in model){
            if(model.hasOwnProperty(variable))
                htmlEles.push([
                    name+ variable.toString(),
                    <div key={name+variable.toString()}>
                        <label htmlFor={variable.toString()}> {variable} </label>
                        <input type={this.getType(variable)} id={this.toString + variable.toString()} 
                        key={name + variable.toString()}
                        defaultValue={model[variable]}
                        name ={variable.toString()}
                        placeholder={model[variable]}/>
                    </div>
                    ]
                    );
        }
        this.myRef=htmlEles;
        urRef=this.myRef;
        return htmlEles;
    }
}

class GeneralInfo extends ReflectiveCom{
    constructor(props){
        super(props);
        this.state={
            name:'', school :'', age:0
        };

        this.renderEle=null;
        this.CreateForm(this.state, "generalInfo",this.renderEle );
    }

    testFunction(e){
        e.preventDefault();
        super.setState({name:'hey', school:'',age:0});
        console.log("this render Elemnt is ");
        console.log(this.state);
    }
    RenderElement=()=>{
        console.log('mapping');
        return this.renderEle.map(element=> element[1]);
    }
    render(){
        return (
            <form>
                <this.RenderElement/>
                <button onClick={this.testFunction.bind(this)}> the Vutton</button>
            </form>
        );
    }
    SanityCheck(){
        console.log("wworking");
    }
} 

export default GeneralInfo;