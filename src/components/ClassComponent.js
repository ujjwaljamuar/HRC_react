import React from "react";

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.name = "Ujjwal Jamuar"
    }
    render(){
        return <h1>{this.name}</h1>
    }
}

export default ClassComponent;