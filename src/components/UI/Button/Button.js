import React from "react";
import './Button.css';


const Button=(props)=>{
    const {setvalue, val} = props;
    
    return(
        <button className={val?'btnui-ok':'btnui'} onClick={setvalue}>{props.children}</button>
    )
}

export default Button;