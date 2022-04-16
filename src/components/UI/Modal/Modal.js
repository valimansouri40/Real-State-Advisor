import React from "react";
import './Modal.css';
import close from '../../../assets/icons/icons8-close-50.png'

const Modal=(props)=>{
        const {setmodal}=props;
    return(
        <div className='modal-target'  style={{zIndex:'200000',position:'fixed', left:'0', top:'0', width:'100%' , height:'100vh'}}>
                 <div onClick={()=>setmodal(false)}   > <img className='close-modal' src={close} style={{zIndex:'200000'}} /></div> 
                    <div  onClick={()=>setmodal(true)} style={{zIndex:'1000000',position:'absolute',top:'30%', left:'30%', width:'30rem', height:'30rem' }} className='modal-box'>
                            {props.children}
                    </div>
        </div>
    )
}

export default Modal;