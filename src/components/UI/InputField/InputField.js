import React from "react";


const InputField=(props)=>{
    const {setval, val}= props;
return(
    <div className='inpcls'><label className='label'>{props.children}</label> <input type='text'
     className='inp inp-res' value={val} onChange={e=>setval(e.target.value)} /></div>
)
}

export default InputField