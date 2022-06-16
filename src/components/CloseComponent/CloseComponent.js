import React from "react";
import { connect } from "react-redux";
import * as action from '../../store/action/index';


const CloseComponent= (props)=>{
        const { closeModalInit} = props;


        return(
            <div style={{width:"100%"}} onClick={()=>closeModalInit(false, false)}>
                {props.children}
            </div>
        )

}

const MapStateToProps = state=>{
    return{
        // modal: state.mark.modal
    }
}
const MapDispatchToProps =dispatch=>{
    return{
        closeModalInit: (dt)=> dispatch(action.closeModalInit(dt))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(CloseComponent)