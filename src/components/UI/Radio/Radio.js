import React from "react";
import './Radio.css';


const Radio=(props)=>{
        const {value,val, setval, selectonehandller, name}= props;
    return(
        <label className='radio-label'>
            <input type='radio' className="radio-checkbox" onClick={(e)=>setval(value.value)}
            checked={value.value === val?true:false}
            name={name} value={value.value} />{value.text}</label>
    )
}


export default Radio;