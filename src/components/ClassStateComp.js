import { Component } from "react";

class ClassStateComp extends Component{
    constructor(props){
        super(props);
        this.state = { type: "password" };
        this.clickHandler = (event) =>{
            let {checked} = event.target;
            if(checked){
                this.setState({type: "text"});
            }else{
                this.setState({type: "password"});
            }
        }
    }
    render(){
        return<>
            <input type={this.state.type}/>
            <input type="checkbox" onClick={this.clickHandler}/> Show Password
        </>
    }
}

export default ClassStateComp;