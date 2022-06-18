import React from 'react';


const Select=(props)=>{
    const {array, setvaluehandller, disabled, val}= props;
    return(
        <div className='selectbox'>
                    <label className='label'>   {props.children}</label>
                <select disabled={disabled} className='select responesive-select' value={val?val:''} 
                 onChange={(e)=>setvaluehandller(e.target.value)}  >
                
            {array?array.map(mp=>(
                <option className='option'>
                    {mp}</option>
            )):null}
        </select>
        </div>
        
    )
}

export default Select;