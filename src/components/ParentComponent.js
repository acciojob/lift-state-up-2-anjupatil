import React,{useState} from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent=()=>{
    const [inputValue,setinputValue]=useState("");
    const handle=(event)=>{
        setinputValue(event.target.value);
    }

    return(
        <div className="parent">
             {inputValue}
            <ChildComponent inputValue={inputValue} onInputCh={handle}></ChildComponent>

           
        </div>
    )

}

export default ParentComponent;