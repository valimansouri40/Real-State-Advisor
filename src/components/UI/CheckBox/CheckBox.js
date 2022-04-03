import React from 'react';
import './CheckBox.css';
import ok from '../../../assets/icons/icons8-circled-thin-32.png';
import circle from '../../../assets/icons/icons8-ok-32.png'

const CheckBox=(props)=>{
        const {changeval, val }=props;

    return(
        <div className={val?'boxtrue':'boxch'} onClick={()=>changeval(e=> !e)}>
            <span className='txt'> {props.children}</span>
            <img src={!val?ok:circle} className='imgchek'/>
        </div>
    )
}


export default CheckBox;