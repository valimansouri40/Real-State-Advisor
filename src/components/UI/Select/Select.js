import React from 'react';


const Select=(props)=>{
    const {array, setvaluehandller, val}= props;
    console.log(val)
    return(
        <div className='selectbox'>
                    <label className='label'>   {props.children}</label>
                <select className='select' value={val?val:''} 
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