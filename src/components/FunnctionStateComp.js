import { useState } from "react";

function FunctionStateComp(){
    let retu = useState();
    let [type, setType] = useState("password");
    let clickHandler = (event)=>{
        let {checked} = event.target;
            if(checked){
                setType("text");
            }else{
                setType("password");
            }
    }
    return<>
            <input type={type}/>
            <input type="checkbox" onClick={clickHandler}/> Show Password
        </>
}

export default FunctionStateComp; 