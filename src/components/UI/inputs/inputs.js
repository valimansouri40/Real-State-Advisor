import React from "react";
import ok from '../../../assets/icons/icons8-circled-thin-32.png';
import circle from '../../../assets/icons/icons8-ok-32.png'
import classes from './input.css';

const Inputs=(props)=>{
    const {type,value,change, img,clickaddfied,id,valid,touch,eltype,setbol}= props;

    let cssclass=[classes.input];
    if(!valid && touch){
        cssclass.push(classes.notvalid);
        
    }
    

    let input;
    switch(type){
        case 'input':
           return input=<div>{img}<input {...eltype} value={value}
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
                   
                    {eltype.options.map(mp=>(
                            <label>
                                {mp}
                                <input type='checkbox' name='areaval' onChange={(e)=>clickaddfied(e,id, mp)} /></label>
                        ))}
                   
            </div>
        default:
            input=<div   className={classes.block}>
                {img}
             <input {...eltype} value={value}
             onClick={()=>{setbol(eltype.placeholder)}}
             onChange={change} className={cssclass.join(' ')}/></div>
    }

   
    return <div className={classes.pad} >{input}</div>;
}

export default Inputs;