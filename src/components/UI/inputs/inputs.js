import React, { useState } from "react";
import ok from '../../../assets/icons/icons8-circled-thin-32.png';
import circle from '../../../assets/icons/icons8-ok-32.png'
import classes from './input.css';

const Inputs=(props)=>{
    const {type,value,change,clickresetfied,clickaddfied, option,valid,touch,eltype,setbol}= props;
    const [mult,setmult]=useState(false);

    let cssclass=[classes.input];
    if(!valid && touch){
        cssclass.push(classes.notvalid);
        
    }
    

    let input;
    switch(type){
        case 'input':
           return input=<div><input {...eltype} value={value}
             onChange={change} className={cssclass.join(' ')}/></div>;
            
        case 'texterea':
           return input= <textarea {...eltype} value={value}
             onChange={change} className={classes.textarea}></textarea>;
             
        case 'select':
           return input=  <div className='selectbox'>
           <label className='label'>   {eltype.placeholder}</label>
       <select className='select'  onChange={change}  >
       <option className='option'></option>
   {eltype.options.map(mp=>(
       <option className='option'>
           {mp}</option>
   ))}
</select>
</div>
        case 'bol':
            return   input =  <div className={value?'boxtrue':'boxch'} onClick={props.Click}>
            <span className='txt'> {eltype.placeholder}</span>
            <img src={!value?ok:circle} className='imgchek'/>
        </div>
        case 'multiplieselect':
            return input = <div className='multiplebox'>
                    <label  onClick={()=>setmult(e=>!e)} className='label'>  <span  className='labelspn'> {eltype.placeholder}</span > 
                    <span className='labelspn'>{value}</span></label>
                   { mult?<div className='box'>
                   <p onClick={clickresetfied} className='field'>reset</p>
                        {eltype.options.map(mp=>(
                            <p onClick={clickaddfied} className='field'>{mp}</p>
                        ))}
                    </div>:null}
            </div>
        default:
            input=<div   className={classes.block}>
             <input {...eltype} value={value}
             onClick={()=>{setbol(eltype.placeholder)}}
             onChange={change} className={cssclass.join(' ')}/></div>
    }

   
    return <div className={classes.pad} >{input}</div>;
}

export default Inputs;