import React from "react";
import './Modal.css';
import close from '../../../assets/icons/icons8-close-50.png'

const Modal=(props)=>{
        const {setmodal}=props;
    return(
        <div className='modal-target'  >
                 <div onClick={()=>setmodal(false)} className="modal-close-box"  > 
                 <img className='modal-close' src={close}  /></div> 
                    <div  onClick={()=>setmodal(true)} 
                     className='modal-box'>
                            {props.children}
                    </div>
        </div>
    )
}

export default Modal;