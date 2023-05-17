import React from "react";

const ChildComponent=({inputValue,onInputCh})=>{
    return(
        <div className="child">
            <input type="text" value={inputValue} onChange={onInputCh} />
        </div>
    )

}

export default ChildComponent;
